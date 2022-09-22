import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { ModalContext } from '../../../context/modalContext';
import { ModalWrapper, BaseModal } from './Modal.styled';

const Modal = () => {
  const { modalContent, modal, closeModal } = useContext(ModalContext);
  if (modal) {
    return ReactDOM.createPortal(
      <ModalWrapper onClick={closeModal}>
        <BaseModal
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          {modalContent}
        </BaseModal>
      </ModalWrapper>,
      document.querySelector('#modal-root')
    );
  } else return null;
};

export default Modal;
