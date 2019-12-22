import { getLanguage } from 'Util/languageStorage'
import { CHANGE_LOCALE } from './actionTypes'

const INIT_STATE = {
  locale: getLanguage()
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case CHANGE_LOCALE:
      return { ...state, locale: action.payload }

    default: return { ...state }
  }
}