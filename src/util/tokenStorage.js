export const getStorage = local => (local ? localStorage : sessionStorage)

export const getToken = () => (
  localStorage.getItem('access_token') || sessionStorage.getItem('access_token')
)

export const setToken = (accessToken, local = false) => {
  const storage = getStorage(local)

  storage.setItem('access_token', accessToken)
}

export const removeToken = () => {
  localStorage.removeItem('access_token')
  sessionStorage.removeItem('access_token')
}