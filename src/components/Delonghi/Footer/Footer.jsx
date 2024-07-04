import React, { useState } from 'react';
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
import { ADD_TO_CART_API } from '../../../constants/api';
import { eventTracker } from '../../../utils/helpers';
import { DEFAULT_PRODUCT_QTY, rotation, translation } from '../../../constants';

const Footer = (props) => {
  const [isAgree, setIsAgree] = useState(false);
  const { t, productData, ...attributes } = props;
  const onCheckboxChange = () => {
    setIsAgree(!isAgree);
  };

  const addToCart = async () => {
    const { scene, snapshotAsync } = window.threekit.player;
    const { x, y, z } = translation;
    const { xRotation, yRotation, zRotation } = rotation;
    try {
      eventTracker('add_to_cart');

      const cameraData = await scene.getAll({
        hierarchical: true,
        name: 'Camera',
      });

      const cameraId = Object.values(cameraData).find(
        (camera) => camera.type === 'Camera'
      ).id;

      // set default camera rotation and translation
      scene.set(
        {
          id: cameraId,
          plug: 'Transform',
          property: 'translation',
        },
        {
          x,
          y,
          z,
        }
      );
      scene.set(
        {
          id: cameraId,
          plug: 'Transform',
          property: 'rotation',
        },
        {
          x: xRotation,
          y: yRotation,
          z: zRotation,
        }
      );
      const savedConfiguration =
        await window.threekit.treble.saveConfiguration();

      const snapshot = await snapshotAsync({
        size: { width: 180, height: 144 },
        mimeType: 'image/png',
        cameraId,
      });
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

      const cartApiResponse = await fetch(ADD_TO_CART_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          CSRFToken: window.DLG.config.CSRFToken,
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: JSON.stringify(requestBody),
      });

      const cartResponse = await cartApiResponse.json();

      window.DLG.EVE.emit('CART.GET'); // call is necessary for delonghi to update the minicart icon in the header.
      window.DLG.EVE.emit('CART.ADD.CONFIGURABLE.PRODUCT', cartResponse); // after a successful add-to-cart action, emit a global event telling to show the modal
    } catch (err) {
      console.log(
        `%cerr Add to Cart = `,
        'font-weight: bold;color: #90ee90',
        err
      );
    }
  };

  const termsAndConditionsUrl = document
    .getElementById('tk-treble-root')
    .getAttribute('data-terms-and-conditions-url');

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
            {t('termsAndConditions0')}{' '}
            <TermsAndCond
              href={termsAndConditionsUrl}
              target="_blank"
              rel="noreferrer"
            >
              {t('termsAndConditions1')}
            </TermsAndCond>{' '}
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
