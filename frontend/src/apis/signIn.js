import axios from 'axios';
import { loginIndex } from '../urls/index'

// ユーザー情報の名前とアドレスが同じ時、catchが実行される。
export const verifyUserData = async(params, dispatch) => {
  // return (dispatch) => {
    await axios.post(loginIndex, params)
    .then(data => {
      console.log(data)
    }).catch(error => {
      console.log(error);
    });
  // }
};
