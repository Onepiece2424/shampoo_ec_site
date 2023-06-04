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
      <div>
        <div style={{ textAlign: 'left' }}>電話番号</div>
        <div>{values.phone_number}</div>
      </div>
      <div>
        <div style={{ textAlign: 'left' }}>お届け先</div>
        <div></div>
      </div>
      <div>
        <div style={{ textAlign: 'left' }}>お届け日時</div>
        <div>{values.appointed_delivery_date}</div>
        <div>{values.appointed_delivery_time}</div>
      </div>
      <div>
        <div style={{ textAlign: 'left' }}>支払い方法</div>
        <div>{values.how_to_payment}</div>
      </div>
      <div>
        <div style={{ textAlign: 'right' }}>
          <StyledButton variant="contained" style={{ margin: '15px 0' }}>注文確定</StyledButton>
        </div>
      </div>
    </div>
  )
}

// export default OrderConfirmation

export default reduxForm({
  form: 'orderForm',
})(OrderConfirmation);
