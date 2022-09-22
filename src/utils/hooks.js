import { useState, useEffect, useRef } from 'react';
import { modals } from '../modals/modalsConfig';

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

const useUnload = (fn) => {
  const cb = useRef(fn); // init with fn, so that type checkers won't assume that current might be undefined

  useEffect(() => {
    cb.current = fn;
  }, [fn]);

  useEffect(() => {
    const onUnload = (...args) => cb.current?.(...args);

    window.addEventListener('beforeunload', onUnload, { capture: true });

    return () =>
      window.removeEventListener('beforeunload', onUnload, { capture: true });
  }, []);
};

const useModal = () => {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState();

  const openModal = (name = false, props = {}) => {
    setModal(true);
    if (name) {
      setModalContent(modals(props)[name]);
    }
  };

  const closeModal = () => {
    setModal(false);
  };

  return { modal, openModal, modalContent, closeModal };
};

export { useWindowDimensions, useUnload, useModal };
