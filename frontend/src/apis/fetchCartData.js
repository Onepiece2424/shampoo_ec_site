import axios from 'axios';
import { cartsIndex } from '../urls/index'
import { dispatchCartData } from '../reducks/reducers/cart';

// カート情報取得
export const fetchCartData = async(headers, dispatch) => {
    await axios.get(cartsIndex, {params: {headers: headers}})
    .then(data => {
      console.log(data)
      dispatch(dispatchCartData(data));
    }).catch(error => {
      // console.log(error);
    });
};
