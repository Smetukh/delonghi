import {
  ThreekitProvider,
  Player,
  // FlatForm,
} from '@threekit-tools/treble';
import FlatForm from './components/Delonghi/Flatform/Flatform';
import {
  AppWrapper,
  PlayerWrapper,
  FormWrapper,
  FooterWrapper,
} from './App.styled';
import Footer from './components/Delonghi/Footer/Footer';
const App = () => (
  <ThreekitProvider>
    <AppWrapper>
      <PlayerWrapper>
        <Player />
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

export default App;
