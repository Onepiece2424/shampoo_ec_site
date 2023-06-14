import axios from 'axios';
import { createOrderurl } from '../urls/index'
import { pageTransitionFlag } from '../reducks/reducers/common';

// 注文の作成とお届け先の登録。注文作成成功時にサンクスページへ。
export const createOrder = async(values, dispatch) => {
  const params = values
  await axios.post(createOrderurl, params)
  .then(data => {
    console.log(data)
    dispatch(pageTransitionFlag(true))
  }).catch(error => {
    console.log(error);
  });
};
