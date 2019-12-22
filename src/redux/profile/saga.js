import { all } from 'redux-saga/effects'

import login from './sagas/login/saga'
import logout from './sagas/logout/saga'

export default function* rootSaga() {
  yield all([
    ...login,
    ...logout
  ])
}