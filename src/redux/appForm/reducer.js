import createReducer from 'Util/createReducer'
import createReducerState from 'Util/createReducerState'

import { STEPS, PERSONAL_SKILLS_LIST } from './actionTypes';

const reducer = {
  ...createReducerState(STEPS, 'step'),
  ...createReducerState(PERSONAL_SKILLS_LIST, 'personalSkills')
}

export default createReducer({}, reducer)