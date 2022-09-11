const {
  TRBL_THREEKIT_ENV = 'preview',
  THREEKIT_PREVIEW_ORG_ID = '41317b8e-32f8-4d07-95cf-3786368a003d',
  THREEKIT_PREVIEW_PUBLIC_TOKEN = 'b146a11a-e717-412d-9659-38155ad5ac85',
} = process.env;

const titleDataTableId = '10cf41dd-6cee-41ea-a6a1-5f8c4ca59fdd';
const obsceneDataTableId = 'e25f1681-3b49-4595-95ef-a54f3474d9a6';
export const titleDataApi = `https://${TRBL_THREEKIT_ENV}.threekit.com/api/datatables/${titleDataTableId}/rows?&orgId=${THREEKIT_PREVIEW_ORG_ID}&bearer_token=${THREEKIT_PREVIEW_PUBLIC_TOKEN}&all=true`;
export const obsceneDataApi = `https://${TRBL_THREEKIT_ENV}.threekit.com/api/datatables/${obsceneDataTableId}/rows?&orgId=${THREEKIT_PREVIEW_ORG_ID}&bearer_token=${THREEKIT_PREVIEW_PUBLIC_TOKEN}&all=true`;
