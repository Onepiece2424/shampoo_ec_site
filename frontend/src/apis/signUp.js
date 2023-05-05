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
      dispatch(pageTransitionFlag(true))
    }).catch(error => {
      console.log(error);
    });
  // }
};
