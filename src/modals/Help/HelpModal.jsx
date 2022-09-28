import React from 'react';
import { Wrapper, Image } from './HelpModal.styled';

const HelpModal = ({ closeModal }) => {
  return (
    <Wrapper>
      <Image onClick={closeModal}></Image>
    </Wrapper>
  );
};

export default HelpModal;
