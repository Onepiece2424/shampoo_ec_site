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
      dispatch(pageTransitionFlag(true))
    }).catch(error => {
      console.log(error);
    });
  // }
};
