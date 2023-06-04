import axios from 'axios';
import { createOrderurl } from '../urls/index'

// 注文の作成とお届け先の登録
export const createOrder = async(values) => {
  const params = values
  await axios.post(createOrderurl, params)
  .then(data => {
    console.log(data)
  }).catch(error => {
    console.log(error);
  });
};
