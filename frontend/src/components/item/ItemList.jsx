import React, { useState, useEffect } from 'react'

// function
import { fetchItems } from '../../apis/items'

// components
import MediaCard from '../Icons'

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
      <br></br>
      {list && list.items && list.items.map((item) => {
        return (
          <>
            <MediaCard key={item.id} name={item.name} description={item.description} price={item.price} stock={item.stock} />
          </>
        );
      })}
    </div>
  )
}

export default ItemList
