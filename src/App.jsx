import { ThreekitProvider, Player } from '@threekit-tools/treble';
import { AppWrapper, PlayerWrapper, FormWrapper } from './App.styled';
import Share from './components/Delonghi/Share';
import delonghi from './store/delonghi';
import { useWindowDimensions } from './utils/hooks';

const App = () => {
  const reducer = {
    delonghi,
  };

  const { width } = useWindowDimensions();

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
      <AppWrapper>
        <PlayerWrapper height={getPlayerHeight()} minHeight={getPlayerHeight()}>
          <Player.TopRightWidgets>
            <Share />
          </Player.TopRightWidgets>
        </PlayerWrapper>
        <FormWrapper />
      </AppWrapper>
    </ThreekitProvider>
  );
};

export default App;
