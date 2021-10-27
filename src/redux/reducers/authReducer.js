import { authInitialState } from "redux/states/initialStates"

const authReducer = (state, action) => {
  if (!state) state = authInitialState

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      }
    default:
      return state
  }
}

export default authReducer
