import React from 'react';
import {
  ButtonsContainer,
  ButtonWrapper,
  ModalWrapper,
  ModalContent,
  ModalTitle,
} from './TermsAndConditions.styled';

const TermsAndConditions = ({ closeModal }) => {
  return (
    <ModalWrapper>
      <ModalTitle>Terms and Conditions</ModalTitle>
      <ModalContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        possimus quas adipisci natus placeat qui beatae perferendis
        exercitationem inventore, ad accusamus quae delectus dolorum corrupti
        fugiat voluptatum veniam est iusto.
      </ModalContent>
      <ButtonsContainer>
        <ButtonWrapper>Ok</ButtonWrapper>
        <ButtonWrapper isDisabled={true} onClick={closeModal}>
          Cancel
        </ButtonWrapper>
      </ButtonsContainer>
    </ModalWrapper>
  );
};

export default TermsAndConditions;
