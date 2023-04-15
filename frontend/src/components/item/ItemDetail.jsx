import React, { useEffect } from 'react'

import { fetchItemsDetail } from '../../apis/itemsDetail'

const ItemDetail = () => {

  // 商品データの取得
  useEffect(() => {
    fetchItemsDetail(1)
    .then((data) =>
      console.log(data)
    )
  }, [])

  return (
    <div>
      商品詳細ページです。
    </div>
  )
}

export default ItemDetail
