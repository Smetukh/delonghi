import { useState, useEffect } from 'react';
import { ThreekitProvider } from '@threekit-tools/treble';
import { ModalProvider } from './context/modalContext';
import delonghi from './store/delonghi';
import '../i18next';

import AppWrapper from './components/Delonghi/AppWrapper/AppWrapper';
import { TRBL_THREEKIT_ENV } from './constants';
import { resolveSku } from './utils/helpers';
import { BEARER_TOKEN, ORG_ID } from './constants/';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [assetId, setAssetId] = useState('');
  // const reducer = {
  //   delonghi,
  // };

  useEffect(() => {
    // get initial table data

    setIsLoading(true);

    resolveSku().then((res) => {
      setAssetId(res);
      setIsLoading(false);
    });
  }, []);

  const projects = {
    credentials: {
      preview: {
        publicToken: BEARER_TOKEN,
        orgId: ORG_ID,
      },
      'admin-fts': {
        publicToken: BEARER_TOKEN,
        orgId: ORG_ID,
      },
    },
    products: {
      preview: {
        assetId: assetId,
      },
      'admin-fts': { assetId: assetId },
    },
  };

  return (
    <ThreekitProvider threekitEnv={TRBL_THREEKIT_ENV} projects={projects}>
      <ModalProvider>
        <AppWrapper />
      </ModalProvider>
    </ThreekitProvider>
  );
};

export default App;
