import {
    takeLatest, put, fork,
} from 'redux-saga/effects'
import { removeToken } from 'Util/tokenStorage'
import { push } from 'connected-react-router'
import {
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_ERROR
} from './actionTypes'

function* logoutWatcher() {
    yield takeLatest(LOGOUT_REQUEST, function* ({ payload }) {
        try {
            removeToken()

            yield put({
                type: LOGOUT_SUCCESS,
                payload,
            })

            yield put(push('/'))
        } catch (error) {
            yield put({
                type: LOGOUT_ERROR,
                error,
            })
        }
    })
}

export default [
    fork(logoutWatcher)
]