import axios from 'axios';
import { itemsDetail } from '../urls/index'

export const fetchItemsDetail = (id) => {
  return axios.get(itemsDetail(id))
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
}
