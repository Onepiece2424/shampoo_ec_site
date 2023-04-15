import axios from 'axios';
import { itemsDetail } from '../urls/index'

export const fetchItemsDetail = () => {
  return axios.get(itemsDetail(1))
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
}
