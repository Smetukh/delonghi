import { ThreekitProvider, Player, Zoom } from '@threekit-tools/treble';
// import {
//   AppWrapper,
//   PlayerWrapper,
//   FormWrapper,
//   PlayerModalProvider,
//   HelperButtonWrapper,
//   CloseIcon,
// } from './App.styled';
import Help from './components/Delonghi/Help';
import { QuestionIcon } from './components/Delonghi/icons';
import Share from './components/Delonghi/Share';
import { ModalContext, ModalProvider } from './context/modalContext';
import delonghi from './store/delonghi';
import { useUnload, useWindowDimensions } from './utils/hooks';
import { useContext } from 'react';
import AppWrapper from './components/Delonghi/AppWrapper/AppWrapper';

const App = () => {
  // const { openModal, closeModal } = useContext(ModalContext);
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
    <ThreekitProvider>
      <ModalProvider>
        <AppWrapper>
          {/* <PlayerModalProvider id="player-root">
            <PlayerWrapper
              height={getPlayerHeight()}
              minHeight={getPlayerHeight()}
            >
              <Player.TopRightWidgets>
                <Share />
              </Player.TopRightWidgets>
              <HelperButtonWrapper>
                <Help />
              </HelperButtonWrapper>
            </PlayerWrapper>
          </PlayerModalProvider>
          <CloseIcon
            onClick={() => openModal('CLOSE_CONFIGURATOR', { closeModal })}
          />
          <FormWrapper /> */}
        </AppWrapper>
      </ModalProvider>
    </ThreekitProvider>
  );
};

export default App;
