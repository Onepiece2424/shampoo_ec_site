import axios from 'axios';
import { loginIndex } from '../urls/index'
import { dispatchUserData } from '../reducks/reducers/user';
import { pageTransitionFlag } from '../reducks/reducers/common';

// ログイン認証処理
export const verifyUserData = async(params, dispatch) => {
  await axios.post(loginIndex, params)
  .then(response => {
    dispatch(dispatchUserData(response.data));
    dispatch(pageTransitionFlag(true));

    if (navigator.cookieEnabled)
    {
        document.cookie = 'access-token=' + response.data.data.access_token;
        document.cookie = 'client=' + response.data.data.client;
        document.cookie = 'uid=' + response.data.data.uid;
    }

    alert('ログイン成功しました。')

  }).catch(error => {
    console.log(error);
    alert('ログイン失敗しました。')
  });
};
