import { useContext, useEffect, useState } from 'react';
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

  useEffect(() => {
    if (hasPlayerLoaded) {
      openModal('PLAYER_HELP_MODAL', { closeModal }); // open helper modal on init
    }
  }, [hasPlayerLoaded]);
  useEffect(() => {
    const arButton = document.querySelector('.arButton___2g-fQ');
    if (!modal && !hasArButton && arButton) {
      // AR button is not visible while helper modal is on. Add eventTracker on modal close
      setHasArButton(true);
      arButton.addEventListener('click', () => eventTracker('share'), false);
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
              <Share />
              <Help />
            </IconsWrapper>
          </HelperButtonWrapper>
        </PlayerWrapper>
      </PlayerModalProvider>
      <CloseIconBlock
        onClick={() => openModal('CLOSE_CONFIGURATOR', { closeModal })}
      >
        <CloseIcon />
      </CloseIconBlock>
      <FlatForm />
    </Container>
  );
};

export default AppWrapper;
