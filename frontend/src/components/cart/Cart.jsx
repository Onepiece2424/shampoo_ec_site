import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import axios from 'axios';

// api
import { fetchCartData } from '../../apis/fetchCartData';

const Cart = () => {
  const dispatch = useDispatch()

  // カートデータの取得
  useEffect(() => {
    // localStorageからトークン情報を取得
    const accessToken = localStorage.getItem('access-token');
    const client = localStorage.getItem('client');
    const uid = localStorage.getItem('uid');

    // axiosのデフォルトリクエストヘッダにトークン情報を設定
    axios.defaults.headers.common['access-token'] = accessToken;
    axios.defaults.headers.common['client'] = client;
    axios.defaults.headers.common['uid'] = uid;

    const headers = {
      'access-token': accessToken,
      'client': client,
      'uid': uid
    };

    axios.defaults.headers.common = headers;

    const api = axios.create({
      baseURL: 'http://localhost:3010/api/v1',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (accessToken && client && uid) {
      api.defaults.headers.common['access-token'] = accessToken;
      api.defaults.headers.common['client'] = client;
      api.defaults.headers.common['uid'] = uid;
    }

    fetchCartData(headers, dispatch)
  }, [dispatch])

  return (
    <div>
      カートページです。
    </div>
  )
}

export default Cart
