import React, { useState, useContext } from 'react';
import QRCode from 'qrcode';
import {
  FooterWrapper,
  Price,
  FooterButton,
  Input,
  InputContainer,
  CheckboxAndButtonContainer,
  TermsAndCond,
} from './Footer.styled';
import { ModalContext } from '../../../context/modalContext';
import { ADD_TO_CART_API, EXPORT_ASSET_API } from '../../../constants/api';
import { eventTracker } from '../../../utils/helpers';
import { DEFAULT_PRODUCT_QTY } from '../../../constants';

const Footer = (props) => {
  const [isAgree, setIsAgree] = useState(false);
  const { openModal, closeModal } = useContext(ModalContext);
  const { t, productData, ...attributes } = props;
  const onCheckboxChange = () => {
    setIsAgree(!isAgree);
  };

  const addToCart = async () => {
    eventTracker('add_to_cart');
    try {
      const tokenDLG = window.DLG.config.CSRFToken;
      const rawExportResponse = await fetch(EXPORT_ASSET_API, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const exportContent = await rawExportResponse.json(); // TODO: handle export file

      const savedConfiguration =
        await window.threekit.treble.saveConfiguration();
      const snapshot = await window.threekit.player.snapshotAsync();

      const enableARUrl = new URL(window.location.href);
      enableARUrl.searchParams.append('tkcsid', savedConfiguration.shortId);
      enableARUrl.searchParams.append('enableAR', true);

      const enableARQRcode = await QRCode.toDataURL(enableARUrl.href);
      let customisation = [];

      // mapping model attributes into customisation array
      const { textAttribute, tagAttribute, ...restAttributes } = attributes;
      if (tagAttribute.value === 'On' && !!textAttribute.value)
        customisation = [
          {
            custKey: 'TESTO_UTENTE',
            custData: textAttribute.value,
            custDes: textAttribute.value,
          },
        ];

      Object.keys(restAttributes).forEach((key) => {
        let custData, custDes;
        const attributeName = restAttributes[key].name;
        const attributeValue = restAttributes[key].value;

        const attributeObj = productData[attributeName];
        const custKey = attributeObj.key;

        // assign Top cover attribute as 'Stainless Steel' or same as body color value
        if (key === 'topCoverAttribute' && attributeValue === 'Metal') {
          custData = attributeObj['GLOSSY STAINLESS STEEL'].finalColorCode;
          custDes = attributeObj['GLOSSY STAINLESS STEEL'].finalColorName;
        } else if (key === 'topCoverAttribute' && attributeValue === 'Color') {
          const bodyAttributeValue = restAttributes['bodyAttribute'].value;
          custData = attributeObj[bodyAttributeValue].finalColorCode;
          custDes = attributeObj[bodyAttributeValue].finalColorName;
        } else {
          custData = attributeObj[attributeValue]?.finalColorCode || 0;
          custDes =
            attributeObj[attributeValue]?.finalColorName || 'Invalid value';
        }

        customisation = [...customisation, { custKey, custData, custDes }];
      });

      const requestBody = {
        enableARUrl: enableARUrl.href,
        enableARQRcode,
        sku: window.DLG.pdp.sku,
        qty: DEFAULT_PRODUCT_QTY,
        snapshot,
        configurationId: savedConfiguration.shortId,
        customisation,
      };

      const rawResponse = await fetch(ADD_TO_CART_API, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${tokenDLG}`,
        },
        body: JSON.stringify(requestBody),
      });
      const content = await rawResponse.json();

      console.log('Add to Cart content', content); // TODO: set correct API url
    } catch (err) {
      console.log(
        `%cerr Add to Cart = `,
        'font-weight: bold;color: #90ee90',
        err
      );
    }
  };

  return (
    <FooterWrapper>
      <Price>{window.DLG?.pdp?.formattedPrice || 0}</Price>
      <CheckboxAndButtonContainer>
        <InputContainer>
          <Input
            value={isAgree}
            defaultChecked={isAgree}
            onChange={onCheckboxChange}
            id="terms"
            type="checkbox"
            key={Math.random()}
          />
          <label>
            {t('termsAndConditions0')}
            <TermsAndCond
              onClick={() =>
                openModal('TERMS_AND_CONDITIONS', {
                  t,
                  closeModal,
                  setIsAgree,
                })
              }
            >
              {' '}
              {t('termsAndConditions1')}
            </TermsAndCond>
            {t('termsAndConditions2')}
          </label>
        </InputContainer>
        <FooterButton disabled={!isAgree} onClick={addToCart}>
          {t('addToBasket')}
        </FooterButton>
      </CheckboxAndButtonContainer>
    </FooterWrapper>
  );
};

export default Footer;
