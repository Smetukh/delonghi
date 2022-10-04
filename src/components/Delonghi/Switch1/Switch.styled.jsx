import styled from 'styled-components';

export const HiddenInput = styled.input`
  width: 0px;
  height: 0px;
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  &:disabled {
    pointer-events: none;
  }
`;

export const Switcher = styled.div`
  width: 60px;
  height: 32px;
  border-radius: 26px;
  cursor: pointer;
  background-color: ${({ checked }) =>
    checked ? '#0C2340' : 'rgba(5, 15, 35, 50%)'};
  border: 3px solid #0c2340;
  display: flex;
  justify-content: ${({ checked }) => (checked ? 'flex-end' : 'flex-start')};
  transition: all ease-out 0.4s;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
`;

export const SwitcherCircle = styled.div`
  width: 26px;
  height: 26px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SwitchTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 132.4%;
  font-family: DeLonghi;
  letter-spacing: 0.01em;
  margin-right: 25px;
`;

export const SwitcherLabel = styled.label``;

export const Container = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
`;
