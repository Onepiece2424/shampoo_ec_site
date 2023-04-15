import React, { useEffect } from 'react'
import { fetchItemsDetail } from '../../apis/itemsDetail'

const ItemDetail = ({ match }) => {

  const id = match.params.id

  // 商品詳細データの取得
  useEffect(() => {
    fetchItemsDetail(id)
    .then((data) =>
      console.log(data)
    )
  }, [id])

  return (
    <div>
      商品詳細ページです。
    </div>
  )
}

export default ItemDetail
