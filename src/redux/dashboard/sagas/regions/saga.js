import { takeLatest, put, call, fork } from "redux-saga/effects";
import { regions } from "Api/dashboard";
import actionTypes from "./actionTypes";

function* regionsWatcher() {
  yield takeLatest(actionTypes.REGIONS.request, function* ({ payload }) {
    try {
      const { data } = yield call(regions, payload);

      yield put({
        type: actionTypes.REGIONS.success,
        payload: data
      });
    } catch (error) {
      yield put({
        type: actionTypes.REGIONS.error,
        error
      });
    }
  });
}

export default [
  fork(regionsWatcher)
]