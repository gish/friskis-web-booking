import actions from './actions'

const reducer = (state, action) => {
  state = state || {}

  switch (action.type) {
    case actions.SET_CREDENTIALS:
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
