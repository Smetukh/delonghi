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
import { useThreekitSelector } from '@threekit-tools/treble/dist/store';
import { ADD_TO_CART_CUSTOMISATION, SKU_DATA } from '../../../constants';
import { ModalContext } from '../../../context/modalContext';

const Footer = () => {
  const [isAgree, setIsAgree] = useState(false);
  const { openModal, closeModal } = useContext(ModalContext);

  const onCheckboxChange = () => {
    setIsAgree(!isAgree);
  };

  const attributes = useThreekitSelector((state) => state).attributes;

  const addToCart = async () => {
    try {
      const savedConfiguration =
        await window.threekit.treble.saveConfiguration();
      const snapshot = await window.threekit.player.snapshotAsync();
      const token = window.DLG.config.CSRFToken;
      const enableARUrl = `${window.location.href}?tkcsid=${savedConfiguration.shortId}&enableAR=true`;
      const enableARQRcode = await QRCode.toDataURL(enableARUrl);

      let customisation = [];

      // mapping model attributes into customisation array
      Object.keys(attributes).forEach((key) => {
        const apiKey = ADD_TO_CART_CUSTOMISATION[key];
        if (apiKey) {
          let value = attributes[key].value;
          if (value === 'Off') value = `NO ${apiKey}`; // Example: 'NO PATTERN', 'NO WOOD KIT'
          customisation = [...customisation, { apiKey, value }];
        }
      });
      const requestBody = {
        enableARUrl,
        enableARQRcode,
        skuCode: window.DLG.config.skuCode,
        qty: 555,
        snapshot,
        configurationId: savedConfiguration.shortId,
        customisation,
      };

      const rawResponse = await fetch('api/cart/add', {
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
      <Price>{`$${SKU_DATA[window.DLG.config.skuCode].price}`}</Price>
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
