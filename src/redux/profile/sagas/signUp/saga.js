import {
  takeLatest, put, call, fork,
} from 'redux-saga/effects'
import { signUp } from 'Api/profile'
import { push } from 'connected-react-router'
import actionTypes from './actionTypes';
import * as ROUTES from 'Constants/routes';
import { prop } from 'ramda'
import { stopSubmit } from 'redux-form'
import { formNames } from 'Components/Form/validate';

function* signUpWatcher() {
  yield takeLatest(actionTypes.SIGN_UP.request, function* ({ payload }) {
    try {
      const data = yield call(signUp, payload)
      const response = prop('data', data)
      const { state } = response || ''

      if (state === false) {
        yield put(push(ROUTES.CONFIRMATION))
      }
      if (state === false) {
        yield put(push(ROUTES.SIGN_IN))
      }

      yield put({
        type: actionTypes.SIGN_UP.success,
        payload: data,
      })
    } catch (error) {
      yield put(stopSubmit(
        formNames['signUp'],
        { _error: prop('response', error) }
      ))

      yield put({
        type: actionTypes.SIGN_UP.error,
        error,
      })
    }
  })
}

export default [
  fork(signUpWatcher),
]