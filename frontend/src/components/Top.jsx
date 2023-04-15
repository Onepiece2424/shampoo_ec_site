import React, { useEffect } from 'react'

// apis
import { fetchItems } from '../apis/items';

const Top = () => {

  // 商品データの取得
  useEffect(() => {
    fetchItems()
    .then((data) =>
      console.log(data)
    )
  }, [])

  return (
    <div>
      Topページです。
    </div>
  )
}

export default Top
