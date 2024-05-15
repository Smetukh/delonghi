const SKU_TO_ASSET_ID = {
  '0132268000': 'b1d107fb-4efd-4f49-8961-398acd735386',
  '0132127000': 'c7eb190e-0eb8-44f5-bcb3-49e4a37b84e2',
};

const assetId =
  SKU_TO_ASSET_ID[window.DLG?.pdp?.sku?.toString()] ||
  SKU_TO_ASSET_ID['0132127000'];

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
      assetId: assetId,
      configurationId: undefined,
      stageId: undefined,
    },
  },
};
