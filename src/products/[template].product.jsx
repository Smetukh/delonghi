import {
  ProductLayout,
  Player,
  PortalToElement,
  FlatForm,
} from '@threekit-tools/treble';
import { TRBL_THREEKIT_ENV } from '../constants';

const products = {
  'product-identifier': { [TRBL_THREEKIT_ENV]: { assetId: '%ASSET_ID%' } },
};

export default function Product() {
  return (
    <ProductLayout products={products}>
      <div className="tk-treble-player">
        <Player />
      </div>
      <PortalToElement to="tk-treble-form" strict={true}>
        <FlatForm />
      </PortalToElement>
    </ProductLayout>
  );
}
