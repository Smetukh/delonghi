import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { ModalContext } from '../../../context/modalContext';
import { ModalWrapper, BaseModal } from './Modal.styled';
import HelpModal from '../../../modals/Help/HelpModal';

const Modal = () => {
  const { modalContent, modal, closeModal, modalName } =
    useContext(ModalContext);
  const isPlayerModal = modalName.includes('PLAYER');
  if (modal) {
    console.log(modalName);
    return isPlayerModal
      ? ReactDOM.createPortal(
          <HelpModal closeModal={closeModal} />,
          document.getElementById('player-root')
        )
      : ReactDOM.createPortal(
          <ModalWrapper onClick={closeModal}>
            <BaseModal
              isPlayerModal={isPlayerModal}
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              {modalContent}
            </BaseModal>
          </ModalWrapper>,
          document.getElementById('modal-root')
        );
  } else return null;
};

export default Modal;
