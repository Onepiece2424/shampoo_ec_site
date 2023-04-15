import React, { useEffect } from 'react'

// function
import { fetchItems } from '../../apis/items'

const ItemList = () => {

  // 商品一覧データの取得
  useEffect(() => {
    fetchItems()
    .then((data) =>
      console.log(data)
    )
  }, [])
  return (
    <div>
      Itemページです。
    </div>
  )
}

export default ItemList
