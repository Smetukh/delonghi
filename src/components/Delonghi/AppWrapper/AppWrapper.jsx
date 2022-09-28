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
import { Player } from '@threekit-tools/treble';
import Help from '../Help';
import Share from '../Share';
// import delonghi from './store/delonghi';
import { useContext } from 'react';
import { ModalContext } from '../../../context/modalContext';
import { useWindowDimensions } from '../../../utils/hooks';
import FlatForm from '../Flatform/Flatform';
import { useAttribute } from '@threekit-tools/treble/dist';
import LaSpecialista from '../../../assets/png/LaSpecialista.png';

const AppWrapper = () => {
  const { openModal, closeModal } = useContext(ModalContext);
  const [inputAttribute, setInputFocus] = useAttribute('Camera Text');
  // const reducer = {
  //   delonghi,
  // };

  const { width } = useWindowDimensions();

  const getPlayerHeight = () => {
    if (width > 700 && width < 900) {
      console.log('width > 700');
      return '521px'; // tablet
    } else if (width > 900) {
      console.log('width > 900');
      return '100vh'; // desktop
    } else {
      console.log('width default', width);
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
            <InnerImage src={LaSpecialista} />
          </Player.TopCenterWidgets>
          <HelperButtonWrapper>
            <IconsWrapper>
              <Help />
              <Share />
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
