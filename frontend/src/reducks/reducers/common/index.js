// initialState
const initialState = {
  flag: false
}

// reducer
export const flagReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CHANGE_FLAG':
      return { ...state, flag: action.payload }
    default:
      return state
  }
}

// Action Creator
export const pageTransitionFlag = (value) => {
  return {
    type:  'CHANGE_FLAG',
    payload: value
  }
}
