import React from 'react';
import { useModal } from '../utils/hooks';
import Modal from '../components/Delonghi/Modal/Modal';

const ModalContext = React.createContext();
const { Provider } = ModalContext;

const ModalProvider = ({ children }) => {
  const { modal, openModal, modalContent, closeModal, modalName } = useModal();
  return (
    <Provider value={{ modal, openModal, modalContent, closeModal, modalName }}>
      <Modal />
      {children}
    </Provider>
  );
};

export { ModalContext, ModalProvider };
