import { setLanguage } from 'Util/languageStorage'
import { CHANGE_LOCALE } from './actionTypes'

export const changeLocale = (locale) => {
  setLanguage(locale)

  return ({
    type: CHANGE_LOCALE,
    payload: locale,
  })
}