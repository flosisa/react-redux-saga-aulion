import createReducer from 'Util/redux/createReducer'
import createReducerState from 'Util/redux/createReducerState'
import { SIGN_UP, SIGN_IN, SIGN_OUT, ACCOUNT } from './actionTypes';
import * as STATES from './states'

const reducer = {
  ...createReducerState(SIGN_UP, STATES.SIGN_UP),
  ...createReducerState(SIGN_IN, STATES.SIGN_IN),
  ...createReducerState(SIGN_OUT, STATES.SIGN_OUT),
  ...createReducerState(ACCOUNT, STATES.ACCOUNT),
}

export default createReducer({}, reducer)
