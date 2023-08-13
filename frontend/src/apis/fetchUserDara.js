import axios from 'axios';
import { userDetailDataUrl, homeUrl } from '../urls/index'
import { fetchUserDataCreator } from '../reducks/reducers/user';
import { fetchCartItemData } from './fetchCartItem';

// ログイン情報取得
export const fetchUserData = async(headers, dispatch) => {
  await axios.get(userDetailDataUrl, { headers: headers })
  // await axios.get(userDetailDataUrl)
  // await axios.get(homeUrl)
  .then(response => {
    dispatch(fetchUserDataCreator(response.data));

    fetchCartItemData(response.data.data, dispatch)
  }).catch(error => {
    // console.log(error);
  });
};
