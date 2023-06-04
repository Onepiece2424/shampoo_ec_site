import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import { Button } from '@mui/material';

const StyledButton = styled(Button)`
  margin: 20px 0;
`;

const OrderConfirmation = () => {

  const form = useSelector(state => state.form);
  const values = form && form.orderForm && form.orderForm.values;

  return (
    <div style={{ margin: '0 20px' }}>
      <h3>注文内容</h3>
      <div>
        <div style={{ textAlign: 'left' }}>受取人名</div>
        <div>{values.receiver_name}</div>
      </div>
      <div style={{ margin: '10px 0' }}>
        <div style={{ textAlign: 'left' }}>電話番号</div>
        <div>{values.phone_number}</div>
      </div>
      <div style={{ margin: '10px 0' }}>
        <div style={{ textAlign: 'left' }}>お届け先</div>
        <div>{values.post_code}</div>
        <div>{values.prefectures}{values.municipality}{values.street_number}{values.building_name}</div>
      </div>
      <div style={{ margin: '10px 0' }}>
        <div style={{ textAlign: 'left' }}>お届け日時</div>
        <div>{values.appointed_delivery_date}</div>
        <div>{values.appointed_delivery_time}</div>
      </div>
      <div style={{ margin: '10px 0' }}>
        <div style={{ textAlign: 'left' }}>支払い方法</div>
        <div>{values.how_to_payment}</div>
      </div>
      <div style={{ margin: '10px 0'}}>
        <StyledButton variant="contained" style={{ margin: '0 10px'}}>1つ前に戻る</StyledButton>
        <StyledButton variant="contained" style={{ margin: '0 10px'}}>注文確定</StyledButton>
      </div>
    </div>
  )
}

export default reduxForm({
  form: 'orderForm',
})(OrderConfirmation);
