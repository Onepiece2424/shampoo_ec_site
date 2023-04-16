import React, { useState, useEffect } from 'react'
import { fetchItemsDetail } from '../../apis/itemsDetail'
import Typography from '@mui/material/Typography';
import logo from '../..//20230416_シャンプー画像.jpg'

const ItemDetail = ({ match }) => {

  const [item, setItem] = useState()
  const id = match.params.id

  // 商品詳細データの取得
  useEffect(() => {
    fetchItemsDetail(id)
    .then((data) =>
      setItem(data.items)
    )
  }, [id])

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
            <div>商品名{item && item.name}</div>
          </div>
        </div>
      </div>
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
  )
}

export default ItemDetail
