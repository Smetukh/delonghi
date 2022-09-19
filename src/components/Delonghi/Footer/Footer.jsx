import React, { useState } from 'react';
import QRCode from 'qrcode';
import {
  FooterWrapper,
  Summary,
  Price,
  ArrowIcon,
  FooterButton,
  Input,
  InputContainer,
  CheckboxAndButtonContainer,
} from './Footer.styled';
import { useWindowDimensions } from '../../../utils/hooks';
import { useThreekitSelector } from '@threekit-tools/treble/dist/store';
import { addToCartCustomisation } from '../../../constants';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAgree, setIsAgree] = useState(false);
  const { width } = useWindowDimensions();
  const onOpenChange = () => {
    if (width < 744) {
      setIsOpen(!isOpen);
    }
  };
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
        const apiKey = addToCartCustomisation[key];
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
    <FooterWrapper isOpen={isOpen}>
      <div onClick={onOpenChange}>
        <Summary>
          <span>Conﬁguration Summary</span>
          {width < 744 && <ArrowIcon isOpen={isOpen} />}
        </Summary>
        {(isOpen || width > 744) && (
          <div>(Beige metal wrapping, Gold chrome plating)</div>
        )}
        <Price>999 USD</Price>
      </div>
      {(isOpen || width > 744) && (
        <CheckboxAndButtonContainer>
          <InputContainer>
            <Input
              value={isAgree}
              defaultChecked={isAgree}
              onChange={onCheckboxChange}
              id="terms"
              type="checkbox"
            />
            <label htmlFor="terms">
              I have read and agree to the terms and conditions
            </label>
          </InputContainer>
          <FooterButton onClick={addToCart}>Add to basket</FooterButton>
        </CheckboxAndButtonContainer>
      )}
    </FooterWrapper>
  );
};

export default Footer;
