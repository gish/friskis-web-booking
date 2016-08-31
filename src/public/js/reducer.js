import { SET_CREDENTIALS } from './actions'

const reducer = (state, action) => {
  state = state || {}

  switch (action.type) {
    case SET_CREDENTIALS:
      const { username, password } = action
      state = {
        ...state,
        username,
        password
      }
      break
  }
  return state
}

export default reducer
