const DEFAULT_API_LOCALHOST = 'http://localhost:3010/api/v1'

export const usersIndex = `${DEFAULT_API_LOCALHOST}/auth`
export const loginIndex = `${DEFAULT_API_LOCALHOST}/auth/sign_in`

export const userDataUrl = `${DEFAULT_API_LOCALHOST}/users/fetch_userdata`
// export const registerTokenUrl = `${DEFAULT_API_LOCALHOST}/users/register_token`

export const itemsIndex = `${DEFAULT_API_LOCALHOST}/items`
export const itemsDetail = (itemId) => `${DEFAULT_API_LOCALHOST}/items/${itemId}`

export const createCarturl = `${DEFAULT_API_LOCALHOST}/carts`
