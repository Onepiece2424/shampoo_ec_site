import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { Field } from 'redux-form';
import styled from 'styled-components';

// components
import { renderTextField } from '../modules/renderTextField';

// modules
import { fetchAddressByZipcode } from '../../modules/fetchAddressByZipcode';

const ModalWrapper = styled.div`
  background-color: #fff;
  padding: 10px 75px;
  border-radius: 10px;
`;

const FieldWrapper = styled.div`
  margin: 10px 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin: 0 15px;
`;

const AddressChangeForm = ({ Modal, close }) => {

  const [zipcode, setZipcode] = useState();
  const [address, setAddress] = useState({
    address1: "",
    address2: "",
    address3: ""
  });

  const form = useSelector(state => state.form);
  const values = form && form.orderForm && form.orderForm.values;

  // 郵便番号から住所情報の検索結果の取得
  const handleZipcodeChange = async (e) => {
    const enteredZipcode = e.target.value;
    if (enteredZipcode.length === 7) {
      setZipcode(enteredZipcode);

      try {
        const addressData = await fetchAddressByZipcode(enteredZipcode);
        setAddress(addressData);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  // お届け先変更
  const addressChange = () => {
    close()
    console.log('お届け先を変更します。')
  }

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
            <Field name="post_code" component={renderTextField} label="郵便番号" onChange={handleZipcodeChange} maxLength={7} />
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
          <ButtonWrapper>
            <Button onClick={close}>閉じる</Button>
            <Button onClick={addressChange} disabled={!values || !values.receiver_name || values.receiver_name.length === 0}>変更する</Button>
          </ButtonWrapper>
        </div>
      </ModalWrapper>
    </Modal>
  );
};

export default AddressChangeForm;
