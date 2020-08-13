import {
  takeLatest, put, fork,
} from 'redux-saga/effects'
import { push } from 'connected-react-router'
import actionTypes from './actionTypes'
import * as ROUTES from 'Constants/routes';

function* signOutWatcher() {
  yield takeLatest(actionTypes.SIGN_OUT.request, function* ({ payload }) {
    try {
      yield put({
        type: actionTypes.SIGN_OUT.success,
        payload: null,
      })

      yield put(push(ROUTES.MAJOR))
    } catch (error) {
      yield put({
        type: actionTypes.SIGN_OUT.error,
        error,
      })
    }
  })
}

export default [
  fork(signOutWatcher)
]