import createReducer from 'Util/createReducer'
import createReducerState from 'Util/createReducerState'

import { LOGIN } from './actionTypes';
import { LOGOUT } from './actionTypes';

const reducer = {
  ...createReducerState(LOGIN, 'login'),
  ...createReducerState(LOGOUT, 'logout')
}

export default createReducer({}, reducer)