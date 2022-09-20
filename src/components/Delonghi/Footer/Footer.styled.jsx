import styled from 'styled-components';

export const FooterWrapper = styled.div`
  width: 100%;
  font-family: sans-serif;
  margin-top: 44px;
`;

export const Price = styled.div`
  font-weight: 500;
  font-size: 32px;
  line-height: 132.4%;
  letter-spacing: 0.01em;
`;

export const FooterButton = styled.button`
  display: block;
  text-align: center;
  color: #fff;
  background-color: #266bbf;
  width: 100%;
  height: 48px;
  font-weight: 700;
  font-size: 16px;
  line-height: 132.4%;
  border: none;
  outline: none;
  border-radius: 3px;
  margin-top: 19px;
  cursor: pointer;
  &:disabled {
    background-color: #dadada;
  }
  transition: all 0.4s ease;
`;

export const Input = styled.input`
  width: 24px;
  height: 24px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: start;
  margin-top: 18px;
  & label {
    margin-left: 9px;
    font-size: 14.4px;
    line-height: 132.4%;
    letter-spacing: 0.01em;
  }
`;

export const CheckboxAndButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;
