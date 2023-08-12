import axios from 'axios';
import { cartItemIndex } from '../urls/index'
import { dispatchCartItemData } from '../reducks/reducers/cart_items';

// カートに含まれる商品情報（CartItem）の取得
export const fetchCartItemData = async(userData, dispatch) => {
  await axios.get(cartItemIndex, {params: {userData: userData}})
  .then(data => {
    dispatch(dispatchCartItemData(data))
  }).catch(error => {
    // console.log(error);
  });
};
