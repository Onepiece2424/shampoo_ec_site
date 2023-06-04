// initialState
const initialState = {
  item: [
    {
      item_name: "",
      quantity: "",
      price: "",
      description: ""
    }
  ],
  total_price: ""
}

// reducer
export const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_CARTDATA':
      return { ...state, item: action.payload.data.items, total_price: action.payload.data.total }
    default:
      return state
  }
}

// Action Creator
export const dispatchCartData = (value) => {
  return {
    type:  'FETCH_CARTDATA',
    payload: value
  }
}
