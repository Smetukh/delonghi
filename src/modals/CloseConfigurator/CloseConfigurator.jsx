import React from 'react';
import {
  ModalTitle,
  ModalWrapper,
  ModalContent,
  ButtonWrapper,
  ButtonsContainer,
} from './CloseConfigurator.styled';

const CloseConfigurator = ({ closeModal }) => {
  return (
    <ModalWrapper>
      <ModalTitle>Close Product Configuration?</ModalTitle>
      <ModalContent>
        If you close this page your product configuration will not be saved
      </ModalContent>
      <ButtonsContainer>
        <ButtonWrapper>Close</ButtonWrapper>
        <ButtonWrapper isDisabled={true} onClick={closeModal}>
          Cancel
        </ButtonWrapper>
      </ButtonsContainer>
    </ModalWrapper>
  );
};

export default CloseConfigurator;
