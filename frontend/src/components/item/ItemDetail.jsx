import React, { useState, useEffect } from 'react'
import { fetchItemsDetail } from '../../apis/itemsDetail'

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
    <>
      商品詳細ページです。
      <br></br>
      <div>商品名{item && item.name}</div>
      <div>特徴{item && item.description}</div>
      <div>価格 ¥{item && item.price}</div>
      <div>在庫数 {item && item.stock}</div>
    </>
  )
}

export default ItemDetail
