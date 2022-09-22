import { ThreekitProvider, Player, Zoom } from '@threekit-tools/treble';
import { AppWrapper, PlayerWrapper, FormWrapper } from './App.styled';
import Help from './components/Delonghi/Help';
import { QuestionIcon } from './components/Delonghi/icons';
import Share from './components/Delonghi/Share';
import { ModalProvider } from './context/modalContext';
import delonghi from './store/delonghi';
import { useUnload, useWindowDimensions } from './utils/hooks';

const App = () => {
  const reducer = {
    delonghi,
  };

  const { width } = useWindowDimensions();

  // Prevent reload page
  // useUnload((e) => {
  //   e.preventDefault();
  //   e.returnValue = '';
  // });

  const getPlayerHeight = () => {
    if (width > 700 && width < 900) {
      console.log('width > 700');
      return '521px';
    } else if (width > 900) {
      console.log('width > 900');
      return '100vh';
    } else {
      console.log('width default', width);
      return '384px';
    }
  };

  return (
    <ThreekitProvider>
      <ModalProvider>
        <AppWrapper>
          <PlayerWrapper
            height={getPlayerHeight()}
            minHeight={getPlayerHeight()}
          >
            {/* <Player.BottomCenterWidgets>
              <Zoom />
            </Player.BottomCenterWidgets> */}
            <Player.TopRightWidgets>
              <Share />
            </Player.TopRightWidgets>
            <Player.BottomRightWidgets>
              <Help />
            </Player.BottomRightWidgets>
          </PlayerWrapper>
          <FormWrapper />
        </AppWrapper>
      </ModalProvider>
    </ThreekitProvider>
  );
};

export default App;
