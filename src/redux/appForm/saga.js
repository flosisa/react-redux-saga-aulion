import { all } from 'redux-saga/effects'

import steps from './sagas/steps/saga'
import personalSkills from './sagas/personalSkills/saga'

export default function* rootSaga() {
  yield all([
    ...steps,
    ...personalSkills
  ])
}