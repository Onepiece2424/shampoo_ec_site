const DEFAULT_API_LOCALHOST = 'http://localhost:3010/api/v1'

export const itemsIndex = `${DEFAULT_API_LOCALHOST}/items`
export const itemsDetail = (itemId) => `${DEFAULT_API_LOCALHOST}/items/${itemId}`
