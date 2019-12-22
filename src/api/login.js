import { getNotAuthInstance } from 'Util/httpClient'
import {
  LOGIN,
} from 'Constants/api'

export const login = data => getNotAuthInstance()
  .post(LOGIN, data)