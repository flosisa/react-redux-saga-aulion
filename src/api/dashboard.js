import { getNotAuthInstance } from 'Util/httpClient'
import {
  DISTRICTS_BY_REGION, REGIONS, ENTITY_TYPES, SPECIALTIES
} from 'Constants/apiUrls'

// in order to show various possible types of queries, below some examples are given.
// These functions are called by redux sagas to perform API calls.
export const districtsByRegion = data => getNotAuthInstance()
  .get(DISTRICTS_BY_REGION, data)

export const regions = data => getNotAuthInstance()
  .get(`${REGIONS}/${data}`)

export const entityTypes = data => getNotAuthInstance()
  .get(ENTITY_TYPES, {
    params: data
  })

export const specialities = data => getNotAuthInstance()
  .get(SPECIALTIES, data)
