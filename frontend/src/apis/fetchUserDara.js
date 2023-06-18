import axios from 'axios';
import { userDataUrl } from '../urls/index'
import { dispatchUserData } from '../reducks/reducers/user';
import { fetchCartItemData } from './fetchCartItem';

// ログイン情報取得
export const fetchUserData = async(userData, dispatch) => {
  await axios.post(userDataUrl, userData)
  .then(data => {
    dispatch(dispatchUserData(data.data));

    // カートに含まれる商品情報（CartItem）の取得
    fetchCartItemData(dispatch)

  }).catch(error => {
    // console.log(error);
  });
};
