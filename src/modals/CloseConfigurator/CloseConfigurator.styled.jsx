import styled from 'styled-components';
import { Button } from '../../components/Delonghi/common/Common.styled';

export const ModalWrapper = styled.div`
  font-family: DeLonghi;
  max-width: 516px;
  padding: 33px 42px 30px;
`;

export const ModalTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: rgba(0, 0, 0, 0.85);
`;

export const ModalContent = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.65);
  margin-top: 24px;
`;

export const ButtonWrapper = styled(Button)`
  width: 207px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 21px;
`;
