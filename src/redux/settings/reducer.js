// simple reducer

import { defaultLocale } from 'Constants/appDefaults'
import { getUserLocale } from 'Util/storages'
import { LOCALE } from './actionTypes'
import * as STATES from './states'
import { prop } from 'ramda'

const INIT_STATE = {
  locale: prop('locale', getUserLocale()) || defaultLocale
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOCALE:
      return { ...state, [STATES.LOCALE]: action.payload }

    default: return { ...state }
  }
}
