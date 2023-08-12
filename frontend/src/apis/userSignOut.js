import axios from 'axios';
import { logoutIndex } from '../urls/index'
import { deleteUserData } from '../reducks/reducers/user';

// ログアウト
export const userSignOut = async(headers, dispatch) => {
  await axios.delete(logoutIndex, { params: { headers: headers }})
  .then(response => {
    if (navigator.cookieEnabled)
    {
        document.cookie = 'access-token=;max-age=0;';
        document.cookie = 'client=;max-age=0;';
        document.cookie = 'uid=;max-age=0;';
    }
    dispatch(deleteUserData(response.data))
  }).catch(error => {
    console.log(error);
  });
};
