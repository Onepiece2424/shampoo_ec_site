import React from 'react'
import { useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
// components
import { renderTextField } from '../modules/renderTextField';
import DatePickerField from './DatePickerField';
import TimePickerField from './TimePickerField';

const Addressee = (props) => {

  const { handleSubmit } = props;

  return (
    <div>
      <br></br>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div>
          <div>お届け先</div>
          <div>
            <Field
              name="address"
              component={renderTextField}
              label="お届け先"
              placeholder="お届け先を入力してください。"
              style={{ width: 200 }}
            />
          </div>
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
              component={renderTextField}
              label="支払い方法"
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
