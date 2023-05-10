import axios from 'axios';
import { loginIndex } from '../urls/index'
import { dispatchUserData } from '../reducks/reducers/user';
import { pageTransitionFlag } from '../reducks/reducers/common';

// ログイン認証処理
export const verifyUserData = async(params, dispatch) => {
  // return (dispatch) => {
    await axios.post(loginIndex, params)
    .then(response => {
      dispatch(dispatchUserData(response));
      dispatch(pageTransitionFlag(true));

      // 取得したトークン情報をlocalStorageなどに保存
      // const { data } = response;
      // const token = data['access-token'];
      // const client = data['client'];
      // const uid = data['uid'];

      // localStorage.setItem('access-token', token);
      // localStorage.setItem('client', client);
      // localStorage.setItem('uid', uid);

    }).catch(error => {
      console.log(error);
    });
  // }
};
