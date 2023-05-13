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

      // 取得したresponseからdataプロパティのuserプロパティの中にあるaccess_tokenなどを分割代入で抽出
      const { data: { user, user: { access_token, client, uid } } } = response;

      // 取得したトークン情報をlocalStorageなどに保存
      localStorage.setItem('access-token', access_token);
      localStorage.setItem('client', client);
      localStorage.setItem('uid', uid);

    }).catch(error => {
      console.log(error);
    });
  // }
};
