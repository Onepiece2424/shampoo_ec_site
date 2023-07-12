const DEFAULT_API_LOCALHOST = 'http://localhost:3010/api/v1'

export const usersIndex = `${DEFAULT_API_LOCALHOST}/auth`
export const loginIndex = `${DEFAULT_API_LOCALHOST}/auth/sign_in`
// export const logoutIndex = `${DEFAULT_API_LOCALHOST}/auth/sign_out`
export const logoutIndex = `${DEFAULT_API_LOCALHOST}/users/logout`

export const userDataUrl = `${DEFAULT_API_LOCALHOST}/users/fetch_userdata`
// export const registerTokenUrl = `${DEFAULT_API_LOCALHOST}/users/register_token`

export const itemsIndex = `${DEFAULT_API_LOCALHOST}/items`
export const itemsDetail = (itemId) => `${DEFAULT_API_LOCALHOST}/items/${itemId}`

export const cartsIndex = `${DEFAULT_API_LOCALHOST}/carts`
export const createCarturl = `${DEFAULT_API_LOCALHOST}/carts`

export const cartItemIndex = `${DEFAULT_API_LOCALHOST}/cart_items`

export const createOrderurl = `${DEFAULT_API_LOCALHOST}/orders`
export const confirmOrderurl = `${DEFAULT_API_LOCALHOST}/checkouts`
