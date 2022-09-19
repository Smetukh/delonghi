import { ThreekitProvider, Player } from '@threekit-tools/treble';
import FlatForm from './components/Delonghi/Flatform/Flatform';
import {
  AppWrapper,
  PlayerWrapper,
  FormWrapper,
  FooterWrapper,
} from './App.styled';
import Footer from './components/Delonghi/Footer/Footer';
import Share from './components/Delonghi/Share';
import delonghi from './store/delonghi';

const App = () => {
  const reducer = {
    delonghi,
  };

  return (
    <ThreekitProvider>
      <AppWrapper>
        <PlayerWrapper>
          <Player>
            <Player.TopRightWidgets>
              <Share />
            </Player.TopRightWidgets>
          </Player>
        </PlayerWrapper>
        <FormWrapper>
          <FlatForm />
        </FormWrapper>
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </AppWrapper>
    </ThreekitProvider>
  );
};

export default App;
