import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import logo from '../..//20230416_シャンプー画像.jpg'
import { Button, MenuItem } from '@mui/material';
import { Field, reduxForm } from 'redux-form';
import axios from 'axios';

// components
import ItemDropDownForm from './ItemDropDownForm';

// api
import { fetchItemsDetail } from '../../apis/itemsDetail'
import { fetchUserData } from '../../apis/fetchUserDara';

// function
import { createCart } from '../../apis/createCart';

const ItemDetail = () => {

  const [item, setItem] = useState()
  const params = useParams();
  const id = params.id
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const form = useSelector(state => state.form);
  const values = form && form.orderForm && form.orderForm.values;

  // ドロップダウンメニューの選択範囲
  const options = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  ];

  // 商品詳細データの取得
  useEffect(() => {
    fetchItemsDetail(id)
    .then((data) =>
      setItem(data.items)
    )
  }, [id])

  // ログインユーザーの取得
  useEffect(() => {
    const userData = {
      token: localStorage.getItem("access-token"),
      client: localStorage.getItem("client"),
      uid: localStorage.getItem("uid"),
    };
    fetchUserData(userData, dispatch)
  }, [dispatch])

  // カートの作成とカートに商品追加
  const InsertItemToCart = () => {
    // const userData = {
    //   token: localStorage.getItem("access-token"),
    //   client: localStorage.getItem("client"),
    //   uid: localStorage.getItem("uid"),
    // };

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

    // 商品の数量
    // const params = values && values.quantity && { quantity: values.quantity }

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

    createCart(headers)
  }

  return (
    <div className="contents">
      <br></br>
      <div className="wrapper">
        <div className="column cat1">
          <div className="info">
            <img src={logo} alt="シャンプー画像" />
          </div>
        </div>
        <div className="column cat2">
          <div className="info">
            <Typography variant="body2" color="text.secondary">
              商品名
            </Typography>
            <div>{item && item.name}</div>
            <br></br>
            <Typography variant="body2" color="text.secondary">
              特徴
            </Typography>
            <div>{item && item.description}</div>
            <br></br>
            <Typography variant="body2" color="text.secondary">
              価格
            </Typography>
            <div>¥{item && item.price}</div>
            <br></br>
            <Typography variant="body2" color="text.secondary">
              在庫数
            </Typography>
            <div>{item && item.stock}</div>
          </div>
          <br></br>
          <Field name="quantity" component={ItemDropDownForm}  label="数量">
            {options.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Field>
          <br></br>
          <br></br>
          <Button variant="outlined" onClick={InsertItemToCart}>カートに入れる</Button>
          <Button variant="outlined" style={{ margin: '3mm'}} onClick={() => navigate('/order')}>ご注文手続きへ</Button>
        </div>
      </div>
    </div>
  )
}

// export default ItemDetail

export default reduxForm({
  form: 'orderForm',
})(ItemDetail);
