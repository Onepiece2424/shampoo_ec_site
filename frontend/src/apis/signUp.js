import axios from 'axios';
import { usersIndex } from '../urls/index'
import { createUserData } from '../reducks/reducers/user';

export const userDataCreate = (params, dispatch) => {
  // return (dispatch) => {
    axios.post(usersIndex, params)
    .then(data => {
      dispatch(createUserData(data));
    }).catch(error => {
      console.log(error);
    });
  // }
};
