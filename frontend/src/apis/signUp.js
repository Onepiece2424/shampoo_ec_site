import axios from 'axios';
import { usersIndex } from '../urls/index'
import { dispatchUserData } from '../reducks/reducers/user';
import { pageTransitionFlag } from '../reducks/reducers/common';

export const userDataCreate = async(params, dispatch) => {
  await axios.post(usersIndex, params)
  .then(response => {
    dispatch(dispatchUserData(response.data));
    dispatch(pageTransitionFlag(true))

    if (navigator.cookieEnabled)
    {
        document.cookie = 'access-token=' + response.headers['access-token'];
        document.cookie = 'client=' + response.headers['client'];
        document.cookie = 'uid=' + response.headers['uid'];
    }
  }).catch(error => {
    console.log(error);
  });
};
