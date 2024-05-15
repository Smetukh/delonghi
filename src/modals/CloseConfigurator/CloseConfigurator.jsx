import React from 'react';
import {
  ModalTitle,
  ModalWrapper,
  ModalContent,
  ButtonWrapper,
  ButtonsContainer,
} from './CloseConfigurator.styled';

const CloseConfigurator = ({ t, closeModal, confirmCloseModal }) => (
  <ModalWrapper>
    <ModalTitle>{t('closeConfiguration')}</ModalTitle>
    <ModalContent>{t('closePage')}</ModalContent>
    <ButtonsContainer>
      <ButtonWrapper onClick={confirmCloseModal}>{t('close')}</ButtonWrapper>
      <ButtonWrapper isDisabled={true} onClick={closeModal}>
        {t('cancel')}
      </ButtonWrapper>
    </ButtonsContainer>
  </ModalWrapper>
);

export default CloseConfigurator;
