import axios from 'axios';
import { createCarturl } from '../urls/index'
// import { dispatchUserData } from '../reducks/reducers/user';
// import { pageTransitionFlag } from '../reducks/reducers/common';

// カート作成と商品追加
export const createCart = async(headers) => {
  // return (dispatch) => {
    await axios.post(createCarturl, headers)
    .then(data => {
      console.log(data)
    }).catch(error => {
      console.log(error);
    });
  // }
};
