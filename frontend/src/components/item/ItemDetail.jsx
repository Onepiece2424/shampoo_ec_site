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

// modules
import { setupAxiosHeaders, createAPIInstance } from '../../modules/accessUserData';

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
    const accessToken = localStorage.getItem('access-token');
    const client = localStorage.getItem('client');
    const uid = localStorage.getItem('uid');

    setupAxiosHeaders(accessToken, client, uid);
    const api = createAPIInstance(accessToken, client, uid);

    fetchUserData(api.defaults.headers.common, dispatch)
  }, [dispatch])

  // カートの作成とカートに商品追加
  const InsertItemToCart = () => {

    // 商品の名前と数量のデータ
    const ItemName = item && item.name
    const quantity = values.quantity

    createCart(ItemName, quantity)
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
