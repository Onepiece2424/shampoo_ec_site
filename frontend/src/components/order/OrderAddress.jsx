import React from 'react';
import { useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { useModal } from 'react-hooks-use-modal';
import { Button, Card } from '@mui/material';
import styled from 'styled-components';

// components
import DatePickerField from './DatePickerField';
import TimePickerField from './TimePickerField';
import renderRadioGroup from './renderRadioGroup';
import AddressChangeForm from './AddressChangeForm';

const Wrapper = styled.div`
  margin: 10px 0;
`;

const StyledCard = styled(Card)`
  margin: 10px 40px;
`;

const StyledButton = styled(Button)`
  margin: 20px 0;
`;

const OrderAddress = (props) => {
  const { handleSubmit, setPage } = props;

  const [Modal, open, close, isOpen] = useModal('root', {
    preventScroll: true,
  });

  const form = useSelector(state => state.form);
  const value = form && form.orderForm && form.orderForm.values;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>お届け先</h3>
          <Wrapper>
            <StyledCard variant="outlined">
              <div>氏名：{form?.orderForm?.values?.receiver_name}</div>
              <div>郵便番号：{form?.orderForm?.values?.post_code}</div>
              <div>電話番号：{form?.orderForm?.values?.phone_number}</div>
            </StyledCard>
          </Wrapper>
          <div>
            <StyledButton variant="outlined" onClick={open}>
              お届け先を変更する
            </StyledButton>
          </div>
          <AddressChangeForm Modal={Modal} isOpen={isOpen} close={close} />
        </div>
        <br />
        <div>
          <h3>お届け希望日時</h3>
          <Wrapper>
            <Field
              name="appointed_delivery_date"
              component={DatePickerField}
              label="お届け予定日"
              placeholder="お届け予定日を入力してください。"
            />
          </Wrapper>
          <br />
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
        <div>
          <h3>支払い方法</h3>
          <div>
            <Field
              name="how_to_payment"
              component={renderRadioGroup}
              placeholder="支払い方法を入力してください。"
              style={{ width: 200 }}
            />
          </div>
        </div>
        <div>
          <StyledButton variant="contained" style={{ margin: '15px 0' }} onClick={() => setPage(true)} disabled={!value || !value.receiver_name || value.receiver_name.length === 0}>
            最終確認ページへ
          </StyledButton>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'orderForm',
  destroyOnUnmount: false
})(OrderAddress);
