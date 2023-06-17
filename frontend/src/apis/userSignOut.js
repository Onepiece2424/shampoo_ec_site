import axios from 'axios';
import { logoutIndex } from '../urls/index'

// ログアウト
export const userSignOut = async() => {
  await axios.delete(logoutIndex)
  .then(data => {
    console.log(data)
  }).catch(error => {
    console.log(error);
  });
};
