import axios from 'axios';
import { userDetailDataUrl } from '../urls/index'
import { fetchUserDataCreator } from '../reducks/reducers/user';
import { fetchCartItemData } from './fetchCartItem';

// ログイン情報取得
export const fetchUserData = async(headers, dispatch) => {
  await axios.get(userDetailDataUrl, {params: {headers: headers}})
  .then(response => {
    dispatch(fetchUserDataCreator(response.data));

    fetchCartItemData(response.data.data, dispatch)
  }).catch(error => {
    // console.log(error);
  });
};
