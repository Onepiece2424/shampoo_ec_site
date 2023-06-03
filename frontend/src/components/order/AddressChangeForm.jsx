import React from 'react'
import { Button } from '@mui/material';
import { Field, reduxForm } from 'redux-form';
import { renderTextField } from '../modules/renderTextField';

const AddressChangeForm = ({ Modal, close }) => {

  // モーダルのスタイル
  const modalStyle = {
    backgroundColor: '#fff',
    padding: '10px 75px',
    borderRadius: '10px',
  };

  return (
    <Modal>
      <div style={modalStyle}>
        <h3>お届け先の変更</h3>
        <div>
          <div style={{margin: '10px 0'}}>
            <Field name="receiver_name" component={renderTextField} label="受取人名" />
          </div>
          <div style={{margin: '10px 0'}}>
            <Field name="phone_number" component={renderTextField} label="電話番号" />
          </div>
          <div style={{margin: '10px 0'}}>
            <Field name="post_code" component={renderTextField} label="郵便番号" />
          </div>
          <div style={{margin: '10px 0'}}>
            <Field name="prefectures" component={renderTextField} label="都道府県" />
          </div>
          <div style={{margin: '10px 0'}}>
            <Field name="municipality" component={renderTextField} label="市町村" />
          </div>
          <div style={{margin: '10px 0'}}>
            <Field name="street_number" component={renderTextField} label="丁目・番地・号" />
          </div>
          <div style={{margin: '10px 0'}}>
            <Field name="building_name" component={renderTextField} label="建物名" />
          </div>
        </div>
        <div>
          <Button onClick={close} style={{ margin: '0 10px' }}>閉じる</Button>
          <Button onClick={close} style={{ margin: '0 10px' }}>変更する</Button>
        </div>
      </div>
    </Modal>
  )
}

export default AddressChangeForm
