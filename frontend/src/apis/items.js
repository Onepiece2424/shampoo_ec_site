import axios from 'axios';
import { itemsIndex } from '../urls/index'

export const fetchItems = () => {
  return axios.get(itemsIndex)
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
}
