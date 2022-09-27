import {
  Container,
  PlayerWrapper,
  PlayerModalProvider,
  HelperButtonWrapper,
  CloseIconBlock,
  IconsWrapper,
  CloseIcon,
} from './AppWrapper.styled';
import Help from '../Help';
import Share from '../Share';
// import delonghi from './store/delonghi';
import { useContext } from 'react';
import { ModalContext } from '../../../context/modalContext';
import { useWindowDimensions } from '../../../utils/hooks';
import FlatForm from '../Flatform/Flatform';

const AppWrapper = () => {
  const { openModal, closeModal } = useContext(ModalContext);
  // const reducer = {
  //   delonghi,
  // };

  const { width } = useWindowDimensions();

  // Prevent reload page
  // useUnload((e) => {
  //   e.preventDefault();
  //   e.returnValue = '';
  // });

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
      <PlayerModalProvider id="player-root">
        <PlayerWrapper height={getPlayerHeight()} minHeight={getPlayerHeight()}>
          {/* <Player.BottomCenterWidgets>
                <Zoom />
              </Player.BottomCenterWidgets> */}
          {/* <Player.TopRightWidgets>
            <Share />
          </Player.TopRightWidgets> */}
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
