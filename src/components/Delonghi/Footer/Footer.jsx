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
import { ADD_TO_CART_API } from '../../../constants/api';

const Footer = (props) => {
  const [isAgree, setIsAgree] = useState(false);
  const { openModal, closeModal } = useContext(ModalContext);
  const { productData, ...attributes } = props;
  const onCheckboxChange = () => {
    setIsAgree(!isAgree);
  };

  const addToCart = async () => {
    try {
      const savedConfiguration =
        await window.threekit.treble.saveConfiguration();
      const snapshot = await window.threekit.player.snapshotAsync();
      const token = window.DLG.config.CSRFToken;

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
        qty: 555,
        snapshot,
        configurationId: savedConfiguration.shortId,
        customisation,
      };

      const rawResponse = await fetch(ADD_TO_CART_API, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody),
      });
      const content = await rawResponse.json();

      console.log('Add to Cart content', content);
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
            I have read and agree to the{' '}
            <TermsAndCond
              onClick={() =>
                openModal('TERMS_AND_CONDITIONS', {
                  closeModal,
                  setIsAgree,
                })
              }
            >
              terms and conditions
            </TermsAndCond>
            . I understand that shipping timings are not guaranteed, the final
            output could be different from the model and I won’t be able to
            return the product.
          </label>
        </InputContainer>
        <FooterButton disabled={!isAgree} onClick={addToCart}>
          Add to basket
        </FooterButton>
      </CheckboxAndButtonContainer>
    </FooterWrapper>
  );
};

export default Footer;
