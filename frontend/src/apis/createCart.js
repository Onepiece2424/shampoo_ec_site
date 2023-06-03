import axios from 'axios';
import { createCarturl } from '../urls/index'

// カート作成と商品追加
export const createCart = async(ItemName, quantity) => {
  const params = { name: ItemName, quantity: quantity }
  await axios.post(createCarturl, params)
  .then(data => {
    console.log(data)
  }).catch(error => {
    console.log(error);
  });
};
