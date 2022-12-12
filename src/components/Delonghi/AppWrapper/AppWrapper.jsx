import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Player, useThreekitInitStatus } from '@threekit-tools/treble';
import { useThreekitSelector } from '@threekit-tools/treble/dist/store';
import { useAttribute } from '@threekit-tools/treble/dist';
import { ModalContext } from '../../../context/modalContext';
import { useWindowDimensions } from '../../../utils/hooks';
import { eventTracker } from '../../../utils/helpers';
import Help from '../Help';
import Share from '../Share';
// import delonghi from './store/delonghi';
import FlatForm from '../Flatform/Flatform';
import {
  Container,
  PlayerWrapper,
  PlayerModalProvider,
  HelperButtonWrapper,
  CloseIconBlock,
  IconsWrapper,
  CloseIcon,
  InnerImage,
} from './AppWrapper.styled';

const AppWrapper = () => {
  const { modal, openModal, closeModal } = useContext(ModalContext);
  const hasPlayerLoaded = useThreekitInitStatus();
  const [inputAttribute, setInputFocus] = useAttribute('Camera Text');
  const [hasArButton, setHasArButton] = useState(null);
  const product = useThreekitSelector((s) => s.product);
  const { width } = useWindowDimensions();

  const { i18n, t } = useTranslation();

  // TODO: remove on prod after testing
  useEffect(() => {
    i18n.changeLanguage(window.DLG?.config.currentLanguageIsocode);
  }, [window.DLG?.config.currentLanguageIsocode]);

  document.body.dir = i18n.dir();

  useEffect(() => {
    if (!hasPlayerLoaded) {
      setTimeout(() => {
        const loaderText = document.querySelector('[class^="loading"]');
        loaderText.innerHTML = t('loading3D');
      }, 4800);
    }
    if (hasPlayerLoaded) {
      const modalprops = {
        closeModal,
        t,
      };
      openModal('PLAYER_HELP_MODAL', modalprops); // open helper modal on init
      setTimeout(() => {
        const arButtonText = document.querySelector('[class^="arButtonText"]');
        arButtonText.innerHTML = t('viewInYourSpace');
      }, 930);
    }
    clearTimeout();
  }, [hasPlayerLoaded]);
  useEffect(() => {
    const arButton = document.querySelector('[class^="arButton"]');
    if (!modal && !hasArButton && arButton) {
      // AR button is not visible while helper modal is on. Add eventTracker on modal close
      setHasArButton(true);
      arButton.addEventListener(
        'click',
        () => {
          eventTracker('share');
          setTimeout(() => {
            document
              .querySelectorAll('[class^="header"]')
              .forEach((el) => (el.innerHTML = t('viewModalTitle')));
            document
              .querySelectorAll('[class^="header"] + [class^="content"]')
              .forEach((el) => (el.innerHTML = t('viewModalContent')));
          });
        },
        false
      );
    }
  }, [modal]);

  const getPlayerHeight = () => {
    if (width > 700 && width < 900) {
      return '521px'; // tablet
    } else if (width > 900) {
      return '100vh'; // desktop
    } else {
      return '384px'; // mobile
    }
  };
  return (
    <Container>
      <PlayerModalProvider
        onMouseDown={() => setInputFocus('Free')}
        id="player-root"
      >
        <PlayerWrapper height={getPlayerHeight()} minHeight={getPlayerHeight()}>
          <Player.TopCenterWidgets>
            {product?.name && (
              <InnerImage
                src={require(`../../../assets/png/${product.name}.png`)}
              />
            )}
          </Player.TopCenterWidgets>
          <HelperButtonWrapper>
            <IconsWrapper>
              <Share t={t} />
              <Help />
            </IconsWrapper>
          </HelperButtonWrapper>
        </PlayerWrapper>
      </PlayerModalProvider>
      <CloseIconBlock
        onClick={() => openModal('CLOSE_CONFIGURATOR', { t, closeModal })}
      >
        <CloseIcon />
      </CloseIconBlock>
      <FlatForm t={t} />
    </Container>
  );
};

export default AppWrapper;
