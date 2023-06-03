import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { useModal } from 'react-hooks-use-modal';
import { Button, Card } from '@mui/material';

// components
import DatePickerField from './DatePickerField';
import TimePickerField from './TimePickerField';
import renderRadioGroup from './renderRadioGroup';
import AddressChangeForm from './AddressChangeForm';

const Addressee = (props) => {

  const { handleSubmit } = props;

  const [Modal, open, close, isOpen] = useModal('root', {
    preventScroll: true
  });

  return (
    <div>
      <br></br>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div>
          <div>お届け先</div>
            <Card variant="outlined" style={{ margin: '10px 40px' }} >
              <div>氏名：テスト太郎</div>
              <div>郵便番号：111-1111</div>
              <div>電話番号：090-1111-1111</div>
            </Card>
          <div>
            <Button variant="outlined" onClick={open}>変更する</Button>
          </div>
          <AddressChangeForm Modal={Modal} isOpen={isOpen} close={close} />
        </div>
        <br></br>
        <br></br>
        <div>
          <div>お届け希望日時</div>
          <div style={{margin: '10px 0'}}>
            <Field
              name="appointed_delivery_date"
              component={DatePickerField}
              label="お届け予定日"
              placeholder="お届け予定日を入力してください。"
            />
          </div>
          <br></br>
          <div>
            <Field
              name="appointed_delivery_time"
              component={TimePickerField}
              label="お届け希望時間帯"
              placeholder="お届け希望時間帯を入力してください。"
            />
          </div>
        </div>
        <br></br>
        <br></br>
        <div>
          <div>支払い方法</div>
          <div>
            <Field
              name="how_to_payment"
              component={renderRadioGroup}
              placeholder="支払い方法を入力してください。"
              style={{ width: 200 }}
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'orderForm',
})(Addressee);
