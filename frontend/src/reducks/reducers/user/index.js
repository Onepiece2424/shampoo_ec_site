// initialState
const initialState = {
  email: {},
  password: {},
  password_confirmation: {},
  name: {}
}

// reducer
export const user = (state = initialState, action) => {
  switch(action.type) {
    case 'CREATE_USER_DATA':
      return { ...state, email: action.payload.email, password: action.payload.password, password_confirmation: action.payload.password_confirmation, name: action.payload.name }
    default:
      return state
  }
}

// Action Creator
export const createUserData = (value) => {
  console.log(value)
  return {
    type:  'CREATE_USER_DATA',
    payload: value
  }
}
