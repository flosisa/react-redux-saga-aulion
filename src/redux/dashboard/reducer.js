import createReducer from 'Util/redux/createReducer'
import createReducerState from 'Util/redux/createReducerState'
import {
  DISTRICTS_BY_REGION,
  REGIONS,
} from './actionTypes';
import * as STATES from './states';

const reducer = {
  ...createReducerState(DISTRICTS_BY_REGION, STATES.DISTRICTS_BY_REGION),
  ...createReducerState(REGIONS, STATES.REGIONS),
}

export default createReducer({}, reducer)