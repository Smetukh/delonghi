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
        const data = await resolveSku();
        const sku = SKU_TO_ASSET_ID[window.DLG?.pdp?.sku?.toString()];

        const fallBack = data.find((sku) => sku.value.SKU === 'fallBack').value
          .assetID;

        if (sku) {
          setAssetId(sku);
          return setIsLoading(false);
        }

        setAssetId(fallBack);
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

const SKU_TO_ASSET_ID = {
  '0132268000': 'b1d107fb-4efd-4f49-8961-398acd735386',
  '0132127000': 'c7eb190e-0eb8-44f5-bcb3-49e4a37b84e2',
};
