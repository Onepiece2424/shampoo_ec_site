import axios from 'axios';
import { loginIndex } from '../urls/index'
import { dispatchUserData } from '../reducks/reducers/user';
import { pageTransitionFlag } from '../reducks/reducers/common';

// ログイン認証処理
export const verifyUserData = async(params, dispatch) => {
  // return (dispatch) => {
    await axios.post(loginIndex, params)
    .then(data => {
      dispatch(dispatchUserData(data));
      dispatch(pageTransitionFlag(true));

      // 取得したトークン情報をlocalStorageなどに保存
      const { headers } = data;
      const token = headers['access-token'];
      const client = headers['client'];
      const uid = headers['uid'];

      localStorage.setItem('access-token', token);
      localStorage.setItem('client', client);
      localStorage.setItem('uid', uid);

    }).catch(error => {
      console.log(error);
    });
  // }
};
