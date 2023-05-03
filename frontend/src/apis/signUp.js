import axios from 'axios';
import { usersIndex } from '../urls/index'

export const userDataCreate = async (params) => {
  try {
    const response = await axios.post(usersIndex, params);
    return response;
  } catch (e) {
    return console.error(e);
  }
}
