import React from 'react'
import store from '../../reducks/store'

const Addressee = () => {

  console.log(store.getState().count)
  return (
    <div>
      注文手続きのページです。
    </div>
  )
}

export default Addressee
