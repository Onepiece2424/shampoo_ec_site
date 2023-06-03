import React from 'react';
import { Button } from '@mui/material';
import { Field, reduxForm } from 'redux-form';
import { renderTextField } from '../modules/renderTextField';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  background-color: #fff;
  padding: 10px 75px;
  border-radius: 10px;
`;

const FieldWrapper = styled.div`
  margin: 10px 0;
`;

const CloseButton = styled(Button)`
  margin: 0 10px;
`;

const AddressChangeForm = ({ Modal, close }) => {
  return (
    <Modal>
      <ModalWrapper>
        <h3>お届け先の変更</h3>
        <div>
          <FieldWrapper>
            <Field name="receiver_name" component={renderTextField} label="受取人名" />
          </FieldWrapper>
          <FieldWrapper>
            <Field name="phone_number" component={renderTextField} label="電話番号" />
          </FieldWrapper>
          <FieldWrapper>
            <Field name="post_code" component={renderTextField} label="郵便番号" />
          </FieldWrapper>
          <FieldWrapper>
            <Field name="prefectures" component={renderTextField} label="都道府県" />
          </FieldWrapper>
          <FieldWrapper>
            <Field name="municipality" component={renderTextField} label="市町村" />
          </FieldWrapper>
          <FieldWrapper>
            <Field name="street_number" component={renderTextField} label="丁目・番地・号" />
          </FieldWrapper>
          <FieldWrapper>
            <Field name="building_name" component={renderTextField} label="建物名" />
          </FieldWrapper>
        </div>
        <div>
          <CloseButton onClick={close}>閉じる</CloseButton>
          <CloseButton onClick={close}>変更する</CloseButton>
        </div>
      </ModalWrapper>
    </Modal>
  );
};

export default AddressChangeForm;
