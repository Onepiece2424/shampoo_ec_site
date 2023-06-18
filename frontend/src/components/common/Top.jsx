import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';

// function
import { fetchItems } from '../../apis/items'
import { pageTransitionFlag } from '../../reducks/reducers/common';

// components
import MediaCard from '../Icons'
import { Link } from 'react-router-dom';

const Top = () => {
  const [list, setList] = useState([])
  const dispatch = useDispatch()

  // 商品一覧データの取得
  useEffect(() => {
    fetchItems()
    .then((data) =>
      setList(data)
    )
  }, [])

  // 一覧ページに切り替えるためのフラグ（state）を初期化
  useEffect(() => {
    dispatch(pageTransitionFlag(false))
  }, [dispatch])

  return (
    <div>
      <br></br>
      {list?.items?.map((item) => {
        return (
          <Link key={item.id} to={`/items/${item.id}`}>
            <MediaCard key={item.id} name={item.name} description={item.description} price={item.price} stock={item.stock} />
          </Link>
        );
      })}
    </div>
  )
}

export default Top;
