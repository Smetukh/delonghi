export const {
  TRBL_THREEKIT_ENV = 'preview', // TODO: fix process.env undefined
  THREEKIT_PREVIEW_ORG_ID = '41317b8e-32f8-4d07-95cf-3786368a003d', // TODO: fix process.env undefined
  THREEKIT_PREVIEW_PUBLIC_TOKEN = 'b146a11a-e717-412d-9659-38155ad5ac85', // TODO: fix process.env undefined
} = process.env;

export const titleDataTableId = '10cf41dd-6cee-41ea-a6a1-5f8c4ca59fdd';
export const obsceneDataTableId = 'e25f1681-3b49-4595-95ef-a54f3474d9a6';
export const PRODUCTS_DATA_TABLE_ID = '9aecd028-899b-428f-a89d-80709bb9f22c';

export const ADD_TO_CART_CUSTOMISATION = {
  'Chrome Details': 'CHROMED_DETAILS',
  'Body Metal Wrapping': 'BODY',
  'Wood Kit': 'WOOD_KIT',
  'Dot Pattern': 'PATTERN',
  'Top cover': 'TOP_COVER',
  text: 'TESTO_UTENTE',
};

export const SKU_TO_ASSET_ID = {
  '0132900001': '17192fd3-7f01-4473-a670-10d608b85f12',
  '0132900002': '0b79a8d9-cfb4-4020-841a-ec649006a796',
};
// TODO: REMOVE START - after testing mocked data sku to assetId mapping
// TODO: handle missing/incorrect sku
if (!window.DLG?.pdp?.sku) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const sku = urlParams.get('sku'); // TODO: remove url param. sku should arrive from window

  window.DLG = {
    pdp: {
      sku: sku || '0132900001',
      formattedPrice: '$1039.99',
    },
    config: {
      CSRFToken:
        'invalid token invalid token invalid token invalid token invalid token ',
    },
  };
}
// TODO: REMOVE END - after testing mocked data sku to assetId mapping

export const COPIED_MESSAGE = 'Current configuration URL is Copied!';

export const inputTextMaxLength = 30;
