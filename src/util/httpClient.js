import axios from 'axios'
import { defaultApi } from 'Constants/defaultValues'
import { getToken, removeToken } from 'Util/tokenStorage'
import { path } from 'ramda'

export function getHost() {
  if (process.env.API_HOST) {
    return `http://${process.env.API_HOST}/`
  }

  return `http://${defaultApi}/`
}

export function getAuthInstance() {
  const instance = axios.create({
    baseURL: getHost(),
    headers: {
      Authorization: `Bearer ${getToken()}`,
      // 'Accept-Language': getLanguage(),
    },
  })

  instance.interceptors.response.use(
    response => response,
    (error) => {
      const status = path(['response', 'status'], error)

      if (status === 401 || status === 403) {
        removeToken()
        return Promise.reject(error);
      }
    }
  )

  return instance
}

export function getNotAuthInstance() {
  return axios.create({
    baseURL: getHost(),
  })
}