import { takeLatest, put, call, fork } from "redux-saga/effects";
import { districtsByRegion } from "Api/dashboard";
import actionTypes from "./actionTypes";

function* districtsByRegionWatcher() {
  yield takeLatest(actionTypes.DISTRICTS_BY_REGION.request, function* ({ payload }) {
    try {
      const { data: { data } } = yield call(districtsByRegion, payload);

      yield put({
        type: actionTypes.DISTRICTS_BY_REGION.success,
        payload: data
      });
    } catch (error) {
      yield put({
        type: actionTypes.DISTRICTS_BY_REGION.error,
        error
      });
    }
  });
}

export default [
  fork(districtsByRegionWatcher)
]