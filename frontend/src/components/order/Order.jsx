import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
// components
import OrderAddress from './OrderAddress'
import OrderConfirmation from './OrderConfirmation'

const Order = () => {

  const [page, setPage] = useState(false)
  const navigate = useNavigate();

  // ログアウト状態の時、ログインページへ遷移
  useEffect(() => {
    const userAccessToken = localStorage.getItem('access-token');
    !userAccessToken && navigate('/users/sign_in')
  }, [navigate])

  return (
    <div>
      { page ? <OrderConfirmation setPage={setPage} /> : <OrderAddress setPage={setPage} />}
    </div>
  )
}

export default Order
