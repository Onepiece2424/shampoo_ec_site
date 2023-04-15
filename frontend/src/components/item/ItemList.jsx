import React, { useState, useEffect } from 'react'

// function
import { fetchItems } from '../../apis/items'

const ItemList = () => {
  const [list, setList] = useState([])

  // 商品一覧データの取得
  useEffect(() => {
    fetchItems()
    .then((data) =>
      setList(data)
    )
  }, [])

  return (
    <div>
      商品一覧ページです。
      {list && list.items && list.items.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  )
}

export default ItemList
