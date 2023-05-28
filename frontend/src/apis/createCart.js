import axios from 'axios';
import { createCarturl } from '../urls/index'
// import { dispatchUserData } from '../reducks/reducers/user';
// import { pageTransitionFlag } from '../reducks/reducers/common';

// カート作成と商品追加
export const createCart = async(ItemName, quantity, headers) => {
  // return (dispatch) => {
    const params = { name: ItemName, quantity: quantity, headers: headers}
    await axios.post(createCarturl, params)
    .then(data => {
      console.log(data)
    }).catch(error => {
      console.log(error);
    });
  // }
};
