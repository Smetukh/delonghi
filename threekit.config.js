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
