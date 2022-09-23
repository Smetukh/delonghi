import styled from 'styled-components';
import Close from '../../../assets/svg/Close';

export const FlatFormTitle = styled.h1`
  font-family: DeLonghi;
  font-weight: bold;
  font-size: 25px;
  line-height: 128.4%;
  letter-spacing: 0.01em;
  /* margin-top: 20px; */
`;

export const CloseIcon = styled(Close)`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
`;

export const FlatFormWrapper = styled.div`
  padding: 12px 18px 20px;
  @media (min-width: 700px) {
    padding: 21px 39px 10px;
  }
`;
