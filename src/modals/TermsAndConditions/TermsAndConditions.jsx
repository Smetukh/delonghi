import React from 'react';
import {
  ButtonsContainer,
  ButtonWrapper,
  ModalWrapper,
  ModalContent,
  ModalTitle,
} from './TermsAndConditions.styled';

const TermsAndConditions = ({ t, closeModal, setIsAgree }) => {
  const onAgreeClick = () => {
    setIsAgree(true);
    closeModal();
  };
  return (
    <ModalWrapper>
      <ModalTitle>{t('termsAndConditions')}</ModalTitle>
      <ModalContent>{t('termsAndConditionsContent')}</ModalContent>
      <ButtonsContainer>
        <ButtonWrapper onClick={onAgreeClick}>
          {t('termsAndConditions')}
        </ButtonWrapper>
      </ButtonsContainer>
    </ModalWrapper>
  );
};

export default TermsAndConditions;
