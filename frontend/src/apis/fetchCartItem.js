import axios from 'axios';
import { cartItemIndex } from '../urls/index'

// カートに含まれる商品情報（CartItem）の取得
export const fetchCartItemData = async() => {
  await axios.get(cartItemIndex)
  .then(data => {
    console.log(data)
  }).catch(error => {
    console.log(error);
  });
};
