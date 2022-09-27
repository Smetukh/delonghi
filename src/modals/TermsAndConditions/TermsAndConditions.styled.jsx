import styled from 'styled-components';
import { Button } from '../../components/Delonghi/common/Common.styled';

export const ModalWrapper = styled.div`
  font-family: DeLonghi;
  padding: 13px 20px 21px;
`;

export const ModalContent = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.65);
  margin-top: 20px;
`;

export const ButtonWrapper = styled(Button)`
  width: 90px;
  height: 37px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 21px;
`;

export const ModalTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 40px;
  color: #8c8c8c;
  border-bottom: 1px solid #8c8c8c;
  text-align: center;
`;
