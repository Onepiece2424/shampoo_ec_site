import React from 'react'
import { Field, reduxForm } from 'redux-form';
// components
import { renderTextField } from '../modules/renderTextField';
import DatePickerField from './DatePickerField';

const Addressee = (props) => {

  const { handleSubmit } = props;

  return (
    <div>
      <br></br>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div>
          <div>お届け先</div>
          <Field
            name="address"
            component={renderTextField}
            label="お届け先"
            placeholder="お届け先を入力してください。"
            style={{ width: 280 }}
          />
        </div>
        <br></br>
        <br></br>
        <div>
          <div>お届け希望日時</div>
          <Field
            name="appointed_delivery_date"
            component={DatePickerField}
            label="お届け予定日"
            placeholder="お届け予定日を入力してください。"
            // style={{ width: 280 }}
          />
          <br></br>
          <Field
            name="appointed_delivery_time"
            component={renderTextField}
            label="お届け希望時間帯"
            placeholder="お届け希望時間帯を入力してください。"
            style={{ width: 280 }}
          />
        </div>
        <br></br>
        <br></br>
        <div>
          <div>支払い方法</div>
          <Field
            name="how_to_payment"
            component={renderTextField}
            label="支払い方法"
            placeholder="支払い方法を入力してください。"
            style={{ width: 280 }}
          />
        </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'orderForm',
})(Addressee);
