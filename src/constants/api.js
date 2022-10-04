import {
  obsceneDataTableId,
  PRODUCTS_DATA_TABLE_ID,
  THREEKIT_PREVIEW_ORG_ID,
  THREEKIT_PREVIEW_PUBLIC_TOKEN,
  titleDataTableId,
  TRBL_THREEKIT_ENV,
} from '.';

export const TITLE_DATA_API = `https://${TRBL_THREEKIT_ENV}.threekit.com/api/datatables/${titleDataTableId}/rows?&orgId=${THREEKIT_PREVIEW_ORG_ID}&bearer_token=${THREEKIT_PREVIEW_PUBLIC_TOKEN}&all=true`;
export const OBSCENE_DATA_API = `https://${TRBL_THREEKIT_ENV}.threekit.com/api/datatables/${obsceneDataTableId}/rows?&orgId=${THREEKIT_PREVIEW_ORG_ID}&bearer_token=${THREEKIT_PREVIEW_PUBLIC_TOKEN}&all=true`;
export const PRODUCTS_DATA_API = `https://${TRBL_THREEKIT_ENV}.threekit.com/api/datatables/${PRODUCTS_DATA_TABLE_ID}/rows?&orgId=${THREEKIT_PREVIEW_ORG_ID}&bearer_token=${THREEKIT_PREVIEW_PUBLIC_TOKEN}&all=true`;
