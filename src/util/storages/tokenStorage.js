import { AUTH_TOKEN } from 'Constants/storage'
import { getStorage } from '.'

// save the token into the session storage for only to demonstrate examples with storage
export const getToken = () => (
  getStorage('session').getItem(AUTH_TOKEN)
)

export const setToken = value => {
  getStorage('session').setItem(AUTH_TOKEN, value)
}

export const removeToken = () => {
  getStorage('session').removeItem(AUTH_TOKEN)
}
