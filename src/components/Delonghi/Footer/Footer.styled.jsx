import styled from 'styled-components';
import ArrowSVG from '../../../assets/svg/Arrow';

export const FooterWrapper = styled.div`
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? '244px' : '85px')};
  box-shadow: 0px -4px 25px rgba(0, 0, 0, 0.15);
  padding: 17px 24px;
  transition: all 0.4s ease;
  font-family: sans-serif;
  @media (min-width: 744px) {
    display: flex;
    justify-content: space-between;
    height: 127px;
    padding: 19px 28px;
  }
`;

export const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 132.4%;
`;

export const Price = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 132.4%;
  margin-top: 14px;
`;

export const ArrowIcon = styled(ArrowSVG)`
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: all 0.4s ease;
`;

export const FooterButton = styled.button`
  display: block;
  text-align: center;
  color: #fff;
  background-color: #266bbf;
  width: 332px;
  height: 48px;
  font-weight: 700;
  font-size: 16px;
  line-height: 132.4%;
  border: none;
  outline: none;
  border-radius: 3px;
  margin: 11px auto 0;
  @media (min-width: 744px) {
    margin: 0;
  }
`;

export const Input = styled.input`
  margin-top: 29px;
  @media (min-width: 744px) {
    margin: 0;
  }
`;
