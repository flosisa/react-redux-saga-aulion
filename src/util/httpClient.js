import axios from 'axios'
import { origin, apiServerOrigin, defaultProtocol } from 'Constants/defaultValues'
import { getToken } from 'Util/storages'
import { path } from 'ramda'

export const getHost = () => {
  if (process.env.API_SERVER_HOST && process.env.API_SERVER_PORT) {
    return `${defaultProtocol}${process.env.API_SERVER_HOST}:${process.env.API_SERVER_PORT}/`
  }

  return apiServerOrigin
}

const axiosDefaults = () => {
  axios.defaults.baseURL = getHost()
  axios.defaults.withCredentials = true
  // some other defaults
}

export const getAuthInstance = () => {
  axios.defaults.headers = getToken() && {
    Authorization: `Bearer ${getToken()}`
  }

  const instance = axios.create()
  instance.interceptors.response.use(
    response => response,
    error => {
      const status = path(['response', 'status'], error)

      if (status === 401 || status === 403) {
        location.href = `${origin}${ROUTES.SIGN_IN}`
      }

      return Promise.reject(error);
    }
  )

  return instance
}

export const getNotAuthInstance = () => {
  axiosDefaults()

  return axios.create()
}
