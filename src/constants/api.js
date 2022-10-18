import {
  obsceneDataTableId,
  PRODUCTS_DATA_TABLE_ID,
  THREEKIT_PREVIEW_ORG_ID,
  THREEKIT_PREVIEW_PUBLIC_TOKEN,
  titleDataTableId,
  TRBL_THREEKIT_ENV,
  SKU_TO_ASSET_ID,
} from '.';

const assetId = SKU_TO_ASSET_ID[window.DLG?.pdp?.sku.toString()];

export const TITLE_DATA_API = `https://${TRBL_THREEKIT_ENV}.threekit.com/api/datatables/${titleDataTableId}/rows?&orgId=${THREEKIT_PREVIEW_ORG_ID}&bearer_token=${THREEKIT_PREVIEW_PUBLIC_TOKEN}&all=true`;
export const OBSCENE_DATA_API = `https://${TRBL_THREEKIT_ENV}.threekit.com/api/datatables/${obsceneDataTableId}/rows?&orgId=${THREEKIT_PREVIEW_ORG_ID}&bearer_token=${THREEKIT_PREVIEW_PUBLIC_TOKEN}&all=true`;
export const PRODUCTS_DATA_API = `https://${TRBL_THREEKIT_ENV}.threekit.com/api/datatables/${PRODUCTS_DATA_TABLE_ID}/rows?&orgId=${THREEKIT_PREVIEW_ORG_ID}&bearer_token=${THREEKIT_PREVIEW_PUBLIC_TOKEN}&all=true`;
export const EXPORT_ASSET_API = `https://${TRBL_THREEKIT_ENV}.threekit.com/api/asset-jobs/${assetId}/export/STP?bearer_token=${THREEKIT_PREVIEW_PUBLIC_TOKEN}`;

export const ADD_TO_CART_API = 'api/cart/add';
