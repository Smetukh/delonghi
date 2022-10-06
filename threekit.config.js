const SKU_TO_ASSET_ID = {
  '0132900001': '17192fd3-7f01-4473-a670-10d608b85f12',
  '0132900002': '0b79a8d9-cfb4-4020-841a-ec649006a796',
};

// TODO: REMOVE START - after testing mocked data sku to assetId mapping
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

const assetId = SKU_TO_ASSET_ID[window.DLG.pdp.sku.toString()];

export default {
  credentials: {
    preview: {
      orgId: process.env.THREEKIT_PREVIEW_ORG_ID,
      publicToken: process.env.THREEKIT_PREVIEW_PUBLIC_TOKEN,
    },
    'admin-fts': {
      orgId: process.env.THREEKIT_ADMIN_FTS_ORG_ID,
      publicToken: process.env.THREEKIT_ADMIN_FTS_PUBLIC_TOKEN,
    },
  },

  products: {
    preview: {
      assetId,
      configurationId: undefined,
      stageId: undefined,
    },
    'admin-fts': {
      assetId: undefined,
      configurationId: undefined,
      stageId: undefined,
    },
  },
};
