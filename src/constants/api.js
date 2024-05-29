import {
  obsceneDataTableId,
  PRODUCTS_DATA_TABLE_ID,
  BEARER_TOKEN,
  titleDataTableId,
  TRBL_THREEKIT_ENV,
  ORG_ID,
  TRANSLATIONS_DATA_TABLE_ID,
  SKU_DATA_TABLE_ID,
} from '.';

export const TITLE_DATA_API = `https://${TRBL_THREEKIT_ENV}.threekit.com/api/datatables/${titleDataTableId}/rows?&orgId=${ORG_ID}&bearer_token=${BEARER_TOKEN}&all=true`;
export const OBSCENE_DATA_API = `https://${TRBL_THREEKIT_ENV}.threekit.com/api/datatables/${obsceneDataTableId}/rows?&orgId=${ORG_ID}&bearer_token=${BEARER_TOKEN}&all=true`;
export const PRODUCTS_DATA_API = `https://${TRBL_THREEKIT_ENV}.threekit.com/api/datatables/${PRODUCTS_DATA_TABLE_ID}/rows?&orgId=${ORG_ID}&bearer_token=${BEARER_TOKEN}&all=true`;
export const TRANSLATIONS_DATA_API = `https://${TRBL_THREEKIT_ENV}.threekit.com/api/datatables/${TRANSLATIONS_DATA_TABLE_ID}/rows?&orgId=${ORG_ID}&bearer_token=${BEARER_TOKEN}&all=true`;
export const SKU_DATA_API = `https://${TRBL_THREEKIT_ENV}.threekit.com/api/datatables/${SKU_DATA_TABLE_ID}/rows?&orgId=${ORG_ID}&bearer_token=${BEARER_TOKEN}&all=true`;

export const ADD_TO_CART_API = `${document.location.origin}${window.DLG.config.encodedContextPath}/api/cart/addcp`;
