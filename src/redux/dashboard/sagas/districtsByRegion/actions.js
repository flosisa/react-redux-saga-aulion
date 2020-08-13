import actionTypes from './actionTypes';

export const districtsByRegion = payload => ({
  type: actionTypes.COUNT_BY_REGION.request, payload
});
