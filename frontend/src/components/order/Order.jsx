import React, { useState } from 'react'

// components
import OrderAddress from './OrderAddress'
import OrderConfirmation from './OrderConfirmation'

const Order = () => {

  const [page, setPage] = useState(false)

  return (
    <div>
      { page ? <OrderConfirmation /> : <OrderAddress setPage={setPage} />}
    </div>
  )
}

export default Order
