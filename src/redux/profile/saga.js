import { all } from 'redux-saga/effects'

import signUp from './sagas/signUp/saga'
import signIn from './sagas/signIn/saga'
import signOut from './sagas/signOut/saga'
import account from './sagas/account/saga'

export default function* rootSaga() {
  yield all([
    ...signUp,
    ...signIn,
    ...signOut,
    ...account,
  ])
}
