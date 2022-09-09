import React, { useState } from 'react';
import {
  FooterWrapper,
  Summary,
  Price,
  ArrowIcon,
  FooterButton,
  Input,
} from './Footer.styled';
import { useWindowDimensions } from '../../../utils/hooks';

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
        <div>
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
          <FooterButton>Add to basket</FooterButton>
        </div>
      )}
    </FooterWrapper>
  );
};

export default Footer;
