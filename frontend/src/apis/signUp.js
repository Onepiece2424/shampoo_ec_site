import axios from 'axios';
import { usersIndex } from '../urls/index'
import { dispatchUserData } from '../reducks/reducers/user';
import { pageTransitionFlag } from '../reducks/reducers/common';

// ユーザー情報の名前とアドレスが同じ時、catchが実行される。
export const userDataCreate = async(params, dispatch) => {
  // return (dispatch) => {
    await axios.post(usersIndex, params)
    .then(data => {
      dispatch(dispatchUserData(data));

      const accessToken = data.headers['access-token'];
      const client = data.headers['client'];
      const uid = data.headers['uid'];

      // 認証情報を保存する
      localStorage.setItem('access-token', accessToken);
      localStorage.setItem('client', client);
      localStorage.setItem('uid', uid);

      // axios.post(registerTokenUrl, data)

      dispatch(pageTransitionFlag(true))
    }).catch(error => {
      console.log(error);
    });
  // }
};
