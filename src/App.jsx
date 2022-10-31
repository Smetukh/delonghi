import { ThreekitProvider } from '@threekit-tools/treble';
import { ModalProvider } from './context/modalContext';
import delonghi from './store/delonghi';
import '../i18next';

import AppWrapper from './components/Delonghi/AppWrapper/AppWrapper';

const App = () => {
  // const reducer = {
  //   delonghi,
  // };

  return (
    <ThreekitProvider>
      <ModalProvider>
        <AppWrapper />
      </ModalProvider>
    </ThreekitProvider>
  );
};

export default App;
