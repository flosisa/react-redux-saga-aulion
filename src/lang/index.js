import { addLocaleData } from 'react-intl'
import enLang from './entries/en-US'
import ruLang from './entries/ru-RU'

const AppLocale = {
  en: enLang,
  py: ruLang,
}
addLocaleData(AppLocale.en.data)
addLocaleData(AppLocale.py.data)

export default AppLocale