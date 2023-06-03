import React from 'react'
import { Button } from '@mui/material';

const AddressChangeForm = ({ Modal, close }) => {

  // モーダルのスタイル
  const modalStyle = {
    backgroundColor: '#fff',
    padding: '60px 75px',
    borderRadius: '10px',
  };

  return (
    <Modal>
      <div style={modalStyle}>
        <h1>Title</h1>
        <p>This is a customizable modal.</p>
        <Button onClick={close}>CLOSE</Button>
      </div>
    </Modal>
  )
}

export default AddressChangeForm
