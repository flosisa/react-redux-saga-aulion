import {
    takeLatest, put, call, fork,
} from 'redux-saga/effects'
import { login } from 'Api/login'
import { setToken, removeToken } from 'Util/tokenStorage'
import { prop } from 'ramda'
import { push } from 'connected-react-router'
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from './actionTypes'

function* loginWatcher() {
    yield takeLatest(LOGIN_REQUEST, function* ({ payload }) {
        try {
            const { data } = yield call(login, payload)

            const accessToken = prop('access_token', data)
            setToken(accessToken)

            yield put({
                type: LOGIN_SUCCESS,
                payload: data,
            })

            yield put(push('/applicants-data'))
        } catch (error) {
            removeToken()

            yield put({
                type: LOGIN_ERROR,
                error,
            })
        }
    })
}

export default [
    fork(loginWatcher),
]