import axios from 'axios';
import { userDataUrl } from '../urls/index'
import { dispatchUserData } from '../reducks/reducers/user';
// import { pageTransitionFlag } from '../reducks/reducers/common';

// ログイン情報取得
export const fetchUserData = async(userData, dispatch) => {
  // return (dispatch) => {
    await axios.post(userDataUrl, userData)
    .then(data => {
      console.log(data)
      dispatch(dispatchUserData(data));
    }).catch(error => {
      console.log(error);
    });
  // }
};
