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
import { Player, useThreekitInitStatus } from '@threekit-tools/treble';
import Help from '../Help';
import Share from '../Share';
// import delonghi from './store/delonghi';
import { useContext, useEffect } from 'react';
import { ModalContext } from '../../../context/modalContext';
import { useWindowDimensions } from '../../../utils/hooks';
import FlatForm from '../Flatform/Flatform';
import { useAttribute } from '@threekit-tools/treble/dist';
import { useThreekitSelector } from '@threekit-tools/treble/dist/store';

const AppWrapper = () => {
  const { openModal, closeModal } = useContext(ModalContext);
  const hasPlayerLoaded = useThreekitInitStatus();
  const [inputAttribute, setInputFocus] = useAttribute('Camera Text');
  const product = useThreekitSelector((s) => s.product);

  useEffect(() => {
    if (hasPlayerLoaded) openModal('PLAYER_HELP_MODAL', { closeModal });
  }, [hasPlayerLoaded]);
  const { width } = useWindowDimensions();

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
          {/* <HelperButtonWrapper>
            <IconsWrapper>
              <Help />
              <Share />
            </IconsWrapper>
          </HelperButtonWrapper> */}
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
