import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { fetchItemsDetail } from '../../apis/itemsDetail'
import Typography from '@mui/material/Typography';
import logo from '../..//20230416_シャンプー画像.jpg'
import { Button } from '@mui/material';

const ItemDetail = () => {

  const [item, setItem] = useState()
  const params = useParams();
  const id = params.id
  const navigate = useNavigate();

  // 商品詳細データの取得
  useEffect(() => {
    fetchItemsDetail(id)
    .then((data) =>
      setItem(data.items)
    )
  }, [id])

  // 商品をカートに入れる
  const InsertItemToCart = () => {
    console.log('カートへ入れました。')
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
          <Button variant="outlined">カートに入れる</Button>
          <Button variant="outlined" style={{ margin: '3mm'}} onClick={() => navigate('/order')}>ご注文手続きへ</Button>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
