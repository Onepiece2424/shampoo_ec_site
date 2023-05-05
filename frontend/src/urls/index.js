const DEFAULT_API_LOCALHOST = 'http://localhost:3010/api/v1'

export const itemsIndex = `${DEFAULT_API_LOCALHOST}/items`
export const itemsDetail = (itemId) => `${DEFAULT_API_LOCALHOST}/items/${itemId}`
export const usersIndex = `${DEFAULT_API_LOCALHOST}/auth`
export const loginIndex = `${DEFAULT_API_LOCALHOST}/auth/sign_in`
