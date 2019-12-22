import {
    takeLatest, put, call, fork,
} from 'redux-saga/effects'
import { personalSkills } from 'Api/personalSkills'
import {
    PERSONAL_SKILLS_LIST_REQUEST,
    PERSONAL_SKILLS_LIST_SUCCESS,
    PERSONAL_SKILLS_LIST_ERROR
} from './actionTypes'

function* personalSkillsWatcher() {
    yield takeLatest(PERSONAL_SKILLS_LIST_REQUEST, function* ({ payload }) {
        try {
            const { data } = yield call(personalSkills, payload)
            yield put({
                type: PERSONAL_SKILLS_LIST_SUCCESS,
                payload: data,
            })
        } catch (error) {
            yield put({
                type: PERSONAL_SKILLS_LIST_ERROR,
                error,
            })
        }
    })
}

export default [
    fork(personalSkillsWatcher),
]