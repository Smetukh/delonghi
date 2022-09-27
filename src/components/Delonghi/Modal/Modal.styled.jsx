import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(126, 124, 124, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BaseModal = styled.div`
  background: ${({ isPlayerModal }) =>
    isPlayerModal ? 'transparent' : '#fff'};
  box-shadow: 0px 4px 45px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  width: ${({ isPlayerModal }) => (isPlayerModal ? '100%' : 'auto')};
  max-width: 300px;
  @media (min-width: 700px) {
    max-width: 852px;
    margin: 0 25px;
  }
`;
