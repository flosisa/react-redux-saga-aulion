import { all } from 'redux-saga/effects'

import districtsByRegion from './sagas/districtsByRegion/saga'
import regions from './sagas/regions/saga'

export default function* rootSaga() {
  yield all([
    ...regions,
    ...districtsByRegion,
  ])
}
