import axios from 'axios';
import { itemsIndex } from '../urls/index'

export const fetchItems = async () => {
  try {
    const res = await axios.get(itemsIndex);
    return res.data;
  } catch (e) {
    return console.error(e);
  }
}
