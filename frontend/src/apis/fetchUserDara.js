import axios from 'axios';
import { userDataUrl } from '../urls/index'
import { dispatchUserData } from '../reducks/reducers/user';
import { fetchCartItemData } from './fetchCartItem';

// ログイン情報取得
export const fetchUserData = async(userData, dispatch) => {
  await axios.post(userDataUrl, userData)
  .then(data => {
    console.log(data)
    dispatch(dispatchUserData(data));

    // カートに含まれる商品情報（CartItem）の取得
    fetchCartItemData()

  }).catch(error => {
    console.log(error);
  });
};
