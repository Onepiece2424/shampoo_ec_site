import axios from 'axios';
import { usersIndex } from '../urls/index'
import { dispatchUserData } from '../reducks/reducers/user';

// ユーザー情報の名前とアドレスが同じ時、catchが実行される。
export const userDataCreate = (params, dispatch) => {
  // return (dispatch) => {
    axios.post(usersIndex, params)
    .then(data => {
      dispatch(dispatchUserData(data));
    }).catch(error => {
      console.log(error);
    });
  // }
};
