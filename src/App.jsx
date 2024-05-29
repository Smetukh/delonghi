import { useState, useEffect } from 'react';
import { ThreekitProvider } from '@threekit-tools/treble';
import { ModalProvider } from './context/modalContext';
import delonghi from './store/delonghi';
import '../i18next';

import AppWrapper from './components/Delonghi/AppWrapper/AppWrapper';
import { TRBL_THREEKIT_ENV } from './constants';
import { resolveSku } from './utils/helpers';
import { BEARER_TOKEN } from './constants/';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [assetId, setAssetId] = useState('');
  // const reducer = {
  //   delonghi,
  // };

  useEffect(() => {
    // get initial table data
    const fetchData = async () => {
      setIsLoading(true);
      if (BEARER_TOKEN) {
        const sku = await resolveSku();

        setAssetId(sku);
        return setIsLoading(false);
      }
    };
    fetchData();
  }, [BEARER_TOKEN]);

  if (isLoading) return null;

  return (
    <ThreekitProvider threekitEnv={TRBL_THREEKIT_ENV} assetId={assetId}>
      <ModalProvider>
        <AppWrapper />
      </ModalProvider>
    </ThreekitProvider>
  );
};

export default App;
