import {
  takeLatest, put, call, fork, select
} from 'redux-saga/effects'
import { signIn } from 'Api/profile'
import { push } from 'connected-react-router'
import actionTypes from './actionTypes'
import { reset } from 'redux-form';
import * as ROUTES from 'Constants/routes';
import * as actions from 'Redux/actions'
import { path } from 'ramda'
import { stopSubmit } from 'redux-form'
import { formNames } from 'Components/Form/validate';

function* signInWatcher() {
  yield takeLatest(actionTypes.SIGN_IN.request, function* ({ payload }) {
    try {
      yield call(signIn, payload)
      const USER_AUTHENTICATED = true // some logic

      if (USER_AUTHENTICATED) {
        yield put(reset(formNames['signIn']))
        yield put(push(ROUTES.JURIDICAL_ENTITIES))
      }

      const { profile } = yield select()
      const signUpState = path(['signUp', 'data'], profile)
      if (signUpState) {
        yield put(actions.signUpClear())
      }

      yield put({
        type: actionTypes.SIGN_IN.success,
        payload: null,
      })
    } catch (error) {
      yield put(stopSubmit(
        formNames['signIn'],
        { _error: path(['response', 'status'], error) }
      ))

      yield put({
        type: actionTypes.SIGN_IN.error,
        error,
      })
    }
  })
}

export default [
  fork(signInWatcher),
]