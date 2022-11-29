import React from 'react';
import {
  ModalTitle,
  ModalWrapper,
  ModalContent,
  ButtonWrapper,
  ButtonsContainer,
} from './CloseConfigurator.styled';

const CloseConfigurator = ({ t, closeModal }) => (
  <ModalWrapper>
    <ModalTitle>{t('closeConfiguration')}</ModalTitle>
    <ModalContent>{t('closePage')}</ModalContent>
    <ButtonsContainer>
      <ButtonWrapper>{t('close')}</ButtonWrapper>
      <ButtonWrapper isDisabled={true} onClick={closeModal}>
        {t('cancel')}
      </ButtonWrapper>
    </ButtonsContainer>
  </ModalWrapper>
);

export default CloseConfigurator;
