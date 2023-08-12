import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import MediaCard from '../Icons'
import { Link } from 'react-router-dom';
import { fetchItems } from '../../apis/items'
import { pageTransitionFlag } from '../../reducks/reducers/common';

const Top = () => {
  const [list, setList] = useState([])
  const dispatch = useDispatch()

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
