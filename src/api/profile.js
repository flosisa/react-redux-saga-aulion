import { getAuthInstance, getNotAuthInstance } from 'Util/httpClient'
import {
  SIGN_IN, SIGN_UP, ACCOUNT
} from 'Constants/apiUrls'

export const signUp = data => getNotAuthInstance()
  .post(SIGN_UP, data)

export const signIn = data => getNotAuthInstance()
  .post(SIGN_IN, data)

export const accountInfo = data => getAuthInstance()
  .get(`${ACCOUNT}/${data}`)

export const accountEdit = data => getAuthInstance()
  .put(ACCOUNT, data)
