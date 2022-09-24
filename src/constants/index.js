const {
  TRBL_THREEKIT_ENV = 'preview',
  THREEKIT_PREVIEW_ORG_ID = '41317b8e-32f8-4d07-95cf-3786368a003d',
  THREEKIT_PREVIEW_PUBLIC_TOKEN = '3bc3c2f6-5c7c-4439-892a-4a1feeedb7d0'
} = process.env;

const titleDataTableId = '10cf41dd-6cee-41ea-a6a1-5f8c4ca59fdd';
const obsceneDataTableId = 'e25f1681-3b49-4595-95ef-a54f3474d9a6';
export const TITLE_DATA_API = `https://${TRBL_THREEKIT_ENV}.threekit.com/api/datatables/${titleDataTableId}/rows?&orgId=${THREEKIT_PREVIEW_ORG_ID}&bearer_token=${THREEKIT_PREVIEW_PUBLIC_TOKEN}&all=true`;
export const OBSCENE_DATA_API = `https://${TRBL_THREEKIT_ENV}.threekit.com/api/datatables/${obsceneDataTableId}/rows?&orgId=${THREEKIT_PREVIEW_ORG_ID}&bearer_token=${THREEKIT_PREVIEW_PUBLIC_TOKEN}&all=true`;

export const ADD_TO_CART_CUSTOMISATION = {
  'Chrome plated Specialista': 'CHROMED DETAILS',
  'Body metal wrappings Specialista': 'BODY',
  'Body metal Maestosa': 'BODY',
  'Wood kit': 'WOOD KIT',
  'Dot Pattern': 'PATTERN',
  'Top cover': 'TOP COVER',
};

export const COPIED_MESSAGE = 'Current configuration URL is Copied!';

export const SKU_DATA = {
  11111: { title: 'La Specialista Maestro Tailor-Made', price: 1039.99 },
  22222: { title: 'Maestosa Tailor-Made', price: 999.99 },
};

export const inputTextMaxLength = 30;
