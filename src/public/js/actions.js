const SET_CREDENTIALS = 'SET_CREDENTIALS'

const setCrendentials = (credentials) => {
  return {
    ...credentials,
    type: SET_CREDENTIALS
  }
}

default export {
  SET_CREDENTIALS,
  setCrendentials
}
