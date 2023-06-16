// initialState
const initialState = {
  cart_items: [
    {
      item_id: "",
      cart_id: "",
      quantity: "",
    }
  ],
}

// reducer
export const cartItemReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_CARTITEMDATA':
      return { ...state, cart_items: action.payload.data.cart_items }
    default:
      return state
  }
}

// Action Creator
export const dispatchCartItemData = (value) => {
  return {
    type:  'FETCH_CARTITEMDATA',
    payload: value
  }
}
