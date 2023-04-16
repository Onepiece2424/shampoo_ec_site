import React, { useState, useEffect } from 'react'

// function
import { fetchItems } from '../../apis/items'

// components
import MediaCard from '../Icons'
import { Link } from 'react-router-dom';

const Top = () => {
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
      <br></br>
      {list?.items?.map((item) => {
        return (
          <Link to={`/items/${item.id}`}>
            <MediaCard key={item.id} name={item.name} description={item.description} price={item.price} stock={item.stock} />
          </Link>
        );
      })}
    </div>
  )
}

export default Top;
