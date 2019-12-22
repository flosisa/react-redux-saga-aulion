import {
  pipe, filter, length, path,
} from 'ramda'
import { CURRENT_LANGUAGE } from 'Constants/storage'
import { defaultLocale, localeOptions } from 'Constants/defaultValues'

export const getLanguage = () => {
  const storageLang = localStorage.getItem(CURRENT_LANGUAGE)

  const localLang = pipe(
    filter(item => path(['id'], item) === storageLang),
    length,
  )(localeOptions)

  if (localLang > 0) {
    return storageLang
  }

  return defaultLocale
}

export const setLanguage = (lang) => {
  localStorage.setItem(CURRENT_LANGUAGE, lang)
}