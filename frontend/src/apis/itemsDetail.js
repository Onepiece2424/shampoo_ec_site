import axios from 'axios';
import { itemsDetail } from '../urls/index'

export const fetchItemsDetail = async (id) => {
  try {
    const res = await axios.get(itemsDetail(id));
    return res.data;
  } catch (e) {
    return console.error(e);
  }
}
