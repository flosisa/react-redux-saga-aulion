import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import appForm from './appForm/reducer';
import settings from './settings/reducer'
import profile from './profile/reducer'

const reducers = history => combineReducers({
    router: connectRouter(history),
    form: formReducer,
    appForm,
    settings,
    profile,
})

export default reducers;