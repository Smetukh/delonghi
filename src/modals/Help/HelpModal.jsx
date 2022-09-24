import React from 'react';
import { Wrapper, Image, InnerImage } from './HelpModal.styled';
import LaSpecialista from '../../assets/png/LaSpecialista.png';

const HelpModal = ({ closeModal }) => {
  return (
    <Wrapper>
      <Image onClick={closeModal}>
        <InnerImage src={LaSpecialista} />
      </Image>
    </Wrapper>
  );
};

export default HelpModal;
