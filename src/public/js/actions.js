const SET_CREDENTIALS = 'SET_CREDENTIALS'

const setCredentials = (credentials) => {
  return {
    ...credentials,
    type: SET_CREDENTIALS
  }
}

export default {
  SET_CREDENTIALS,
  setCredentials
}
