import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent, CardMedia, Typography, Grid, Button } from '@mui/material';

// api
import { fetchCartData } from '../../apis/fetchCartData';

// 画像
import logo from '../..//20230416_シャンプー画像.jpg'

const Cart = () => {
  const cart = useSelector(state => state.cart)
  const [cartFlag, setCartFlag] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  // CartItemがある時にのみデータを表示
  useEffect(() => {
    setCartFlag(cart.total_price)
  }, [cart])

  // ログアウト状態の時、ログインページへ遷移
  useEffect(() => {
    const userAccessToken = localStorage.getItem('access-token');
    !userAccessToken && navigate('/users/sign_in')
  }, [navigate])

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

  // 注文ページへ
  const GoToOrderPage = () => {
    navigate('/order');
  }

  return (
    <div style={{ padding: '10px'}}>
      {cartFlag?.length !== 0 && cart.item.map((item, index) => {
        return (
          <Card style={{ margin: '10px' }} key={index}>
            <Grid container>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardMedia image={logo} sx={{ height: 200 }} />
              </Grid>
              <Grid item xs={12} sm={6} md={8} lg={9}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    {item.item_name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                  <Typography variant="body1" component="div">
                    価格: ¥{item.price}
                  </Typography>
                  <Typography variant="body1" component="div">
                    数量: {item.quantity}
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        )
      })}
      <div style={{ margin: '20px', display: 'flex' }}>
        <Typography style={{ minWidth: '50%' }}>合計金額：¥{cart.total_price}</Typography>
        <Button variant="contained" style={{ minWidth: '50%' }} onClick={GoToOrderPage} disabled={cart.total_price <= 0}>注文手続きへ</Button>
      </div>
    </div>
  )
}

export default Cart
