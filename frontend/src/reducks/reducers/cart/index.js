// initialState
const initialState = {
  cartItem: [
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
  console.log(action)
  switch(action.type) {
    case 'FETCH_CARTDATA':
      return { ...state, cartItem: action.payload.data.cart_items, total_price: action.payload.data.total }
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
