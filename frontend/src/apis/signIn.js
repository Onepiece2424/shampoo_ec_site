import axios from 'axios';
import { loginIndex } from '../urls/index'
import { dispatchUserData } from '../reducks/reducers/user';
import { pageTransitionFlag } from '../reducks/reducers/common';

// ログイン認証処理
export const verifyUserData = async(params, dispatch) => {
  // return (dispatch) => {
    await axios.post(loginIndex, params)
    .then(response => {
      dispatch(dispatchUserData(response.data));
      dispatch(pageTransitionFlag(true));

      // 取得したresponseからdataプロパティのuserプロパティの中にあるaccess_tokenなどを分割代入で抽出
      // eslint-disable-next-line
      // const { data: { user, user: { access_token, client, uid } } } = response;

      // 取得したトークン情報をlocalStorageなどに保存
      localStorage.setItem('access-token', response.data.data.access_token);
      localStorage.setItem('client', response.data.data.client);
      localStorage.setItem('uid', response.data.data.uid);

    }).catch(error => {
      console.log(error);
    });
  // }
};
