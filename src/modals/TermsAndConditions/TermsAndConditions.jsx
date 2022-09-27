import React from 'react';
import {
  ButtonsContainer,
  ButtonWrapper,
  ModalWrapper,
  ModalContent,
  ModalTitle,
} from './TermsAndConditions.styled';

const TermsAndConditions = ({ closeModal, setIsAgree }) => {
  const onAgreeClick = () => {
    setIsAgree(true);
    closeModal();
  };
  return (
    <ModalWrapper>
      <ModalTitle>Terms and Conditions</ModalTitle>
      <ModalContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
        error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab atem sequi nesciunt.
      </ModalContent>
      <ButtonsContainer>
        <ButtonWrapper onClick={onAgreeClick}>I agree</ButtonWrapper>
      </ButtonsContainer>
    </ModalWrapper>
  );
};

export default TermsAndConditions;
