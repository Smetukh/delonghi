export default {
  credentials: {
    preview: {
      orgId:
        process.env.THREEKIT_PREVIEW_ORG_ID ||
        '41317b8e-32f8-4d07-95cf-3786368a003d',
      publicToken:
        process.env.THREEKIT_PREVIEW_PUBLIC_TOKEN ||
        'b146a11a-e717-412d-9659-38155ad5ac85',
    },
    'admin-fts': {
      orgId: process.env.THREEKIT_ADMIN_FTS_ORG_ID,
      publicToken: process.env.THREEKIT_ADMIN_FTS_PUBLIC_TOKEN,
    },
  },

  products: {
    preview: {
      assetId: '0b79a8d9-cfb4-4020-841a-ec649006a796',
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
