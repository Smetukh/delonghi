const skuToAssetId = {
  11111: '0b79a8d9-cfb4-4020-841a-ec649006a796',
  22222: '17192fd3-7f01-4473-a670-10d608b85f12',
  '17192fd3-7f01-4473-a670-10d608b85f12':
    '17192fd3-7f01-4473-a670-10d608b85f12',
};

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const sku = urlParams.get('assetId'); // TODO: remove url param. sku should arrive from window

window.DLG = {
  pdp: {
    sku: sku || '11111',
    formattedPrice: '$1039.99',
  },
  config: {
    CSRFToken: 'CSRFTokenCSRFTokenCSRFTokenCSRFTokenCSRFTokenCSRFToken',
  },
}; // TODO: REMOVE after testing mocked data sku to assetId mapping
const assetId = skuToAssetId[window.DLG.pdp.sku];

export default {
  credentials: {
    preview: {
      orgId:
        process.env.THREEKIT_PREVIEW_ORG_ID ||
        '41317b8e-32f8-4d07-95cf-3786368a003d',
      publicToken:
        process.env.THREEKIT_PREVIEW_PUBLIC_TOKEN ||
        '3bc3c2f6-5c7c-4439-892a-4a1feeedb7d0',
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
