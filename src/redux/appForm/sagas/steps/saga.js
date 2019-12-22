import { put, takeLatest, fork } from 'redux-saga/effects';
import {
    STEPS_REQUEST,
    STEPS_SUCCESS,
    STEPS_ERROR
} from './actionTypes';

function* stepsWatcher() {
    yield takeLatest(STEPS_REQUEST, function* ({ payload }) {
        try {
            yield put({ type: STEPS_SUCCESS, payload });
        } catch (error) {
            yield put({ type: STEPS_ERROR, error: error });
        }
    });
}

export default [
    fork(stepsWatcher)
];