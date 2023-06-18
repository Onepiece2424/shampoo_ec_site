import axios from 'axios';
import { logoutIndex } from '../urls/index'

// ログアウト
export const userSignOut = async(userHeader) => {
  await axios.post(logoutIndex, userHeader)
  .then(data => {
    console.log(data)
  }).catch(error => {
    console.log(error);
  });
};
