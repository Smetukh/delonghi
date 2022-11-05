import { ThreekitProvider } from '@threekit-tools/treble';
import { ModalProvider } from './context/modalContext';
import delonghi from './store/delonghi';
import '../i18next';

import AppWrapper from './components/Delonghi/AppWrapper/AppWrapper';
import { TRBL_THREEKIT_ENV } from './constants';

const App = () => {
  // const reducer = {
  //   delonghi,
  // };

  return (
    <ThreekitProvider threekitEnv={TRBL_THREEKIT_ENV}>
      <ModalProvider>
        <AppWrapper />
      </ModalProvider>
    </ThreekitProvider>
  );
};

export default App;
