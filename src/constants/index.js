export const TRBL_THREEKIT_ENV = process.env.TRBL_THREEKIT_ENV;
export const THREEKIT_ADMIN_FTS_ORG_ID = process.env.THREEKIT_ADMIN_FTS_ORG_ID;
export const THREEKIT_PREVIEW_ORG_ID = process.env.THREEKIT_PREVIEW_ORG_ID;
export const THREEKIT_PREVIEW_PUBLIC_TOKEN =
  process.env.THREEKIT_PREVIEW_PUBLIC_TOKEN;
export const THREEKIT_ADMIN_FTS_PUBLIC_TOKEN =
  process.env.THREEKIT_ADMIN_FTS_PUBLIC_TOKEN;

const ENV = {
  preview: {
    token: THREEKIT_PREVIEW_PUBLIC_TOKEN,
    orgId: THREEKIT_PREVIEW_ORG_ID,
  },
  'admin-fts': {
    token: THREEKIT_ADMIN_FTS_PUBLIC_TOKEN,
    orgId: THREEKIT_ADMIN_FTS_ORG_ID,
  },
};

export const BEARER_TOKEN = ENV[TRBL_THREEKIT_ENV]?.token;
export const ORG_ID = ENV[TRBL_THREEKIT_ENV]?.orgId;

export const LANGUAGE_LIST = ['en', 'it', 'de'];
export const FALLBACK_LANGUAGE = 'en';

// TODO: REMOVE START - after testing mocked data sku to assetId mapping
// TODO: handle missing/incorrect sku
if (!window.DLG?.pdp?.sku) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const sku = urlParams.get('sku'); // TODO: remove url param. sku should arrive from window
  const formattedPrice = urlParams.get('formattedPrice'); // TODO: remove url param. sku should arrive from window
  const CSRFToken = urlParams.get('CSRFToken'); // TODO: remove url param. sku should arrive from window

  window.DLG = {
    pdp: {
      sku: sku || '0132268000',
      formattedPrice: formattedPrice || '$0.00',
    },
    config: {
      CSRFToken:
        CSRFToken ||
        'invalid token invalid token invalid token invalid token invalid token ',
      currentLanguageIsocode: FALLBACK_LANGUAGE,
      encodedContextPath: `/${FALLBACK_LANGUAGE}-${FALLBACK_LANGUAGE}`, // '/en-en',
    },
  };
}
// TODO: REMOVE END - after testing mocked data sku to assetId mapping

const SKU_TO_ASSET_ID = {
  '0132268000': 'b1d107fb-4efd-4f49-8961-398acd735386',
  '0132127000': 'c7eb190e-0eb8-44f5-bcb3-49e4a37b84e2',
};

export const assetId =
  SKU_TO_ASSET_ID[window.DLG?.pdp?.sku?.toString()] ||
  SKU_TO_ASSET_ID['0132268000'];

export const titleDataTableId = '10cf41dd-6cee-41ea-a6a1-5f8c4ca59fdd';
export const obsceneDataTableId = 'e25f1681-3b49-4595-95ef-a54f3474d9a6';
export const PRODUCTS_DATA_TABLE_ID = '9aecd028-899b-428f-a89d-80709bb9f22c';
export const TRANSLATIONS_DATA_TABLE_ID =
  '02f61ce5-15a6-4947-a0c5-83de0402afe9';

export const INPUT_TEXT_MAX_LENGTH = 30;

export const DEFAULT_PRODUCT_QTY = 1;
