import axios from 'axios';
import { confirmOrderurl } from '../urls/index'

// 決済ページへ
export const confirmedOrder = async() => {
  await axios.post(confirmOrderurl)
  .then(data => {
    window.location.href = data.data.session.url
  }).catch(error => {
    console.log(error);
  });
};

