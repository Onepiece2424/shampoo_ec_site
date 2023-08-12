// initialState
const initialState = {
  userId: "",
  email: "",
  name: "",
  accessToken: false
}

// reducer
export const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CREATE_USER_DATA':
      return { ...state, userId: action.payload.data.id, email: action.payload.data.email, name: action.payload.data.name, accessToken: true }
    case 'FETCH_USER_DATA':
      return { ...state, userId: action.payload.data[0].id, email: action.payload.data[0].email, name: action.payload.data[0].name, accessToken: true }
    case 'DELETE_USER_DATA':
      return { ...state, userId: "", email: "", name: "", accessToken: false }
    default:
      return state
  }
}

// Action Creator
export const dispatchUserData = (value) => {
  return {
    type:  'CREATE_USER_DATA',
    payload: value
  }
}

export const fetchUserDataCreator = (value) => {
  return {
    type:  'FETCH_USER_DATA',
    payload: value
  }
}

export const deleteUserData = (value) => {
  return {
    type:  'DELETE_USER_DATA',
    payload: value
  }
}
