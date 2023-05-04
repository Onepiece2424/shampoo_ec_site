// initialState
const initialState = {
  email: "",
  name: ""
}

// reducer
export const user = (state = initialState, action) => {
  switch(action.type) {
    case 'CREATE_USER_DATA':
      return { ...state, email: action.payload.data.data.email, name: action.payload.data.data.name }
    default:
      return state
  }
}

// Action Creator
export const createUserData = (value) => {
  return {
    type:  'CREATE_USER_DATA',
    payload: value
  }
}
