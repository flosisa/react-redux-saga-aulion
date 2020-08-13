import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import settings from './settings/reducer'
import profile from './profile/reducer'

const reducers = history => combineReducers({
  router: connectRouter(history),
  form: formReducer,
  profile,
  settings,
  // others
})

export default reducers;
