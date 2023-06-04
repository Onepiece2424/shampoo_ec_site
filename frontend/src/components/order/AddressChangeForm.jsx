import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { Field } from 'redux-form';
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
    address3: "",
  });

  // 郵便番号の検索
  const handleZipcodeChange = async (e) => {
    const enteredZipcode = e.target.value;
    if (enteredZipcode.length === 7) {
      setZipcode(enteredZipcode);
      try {
        const res = await axios.get(
          "https://zipcloud.ibsnet.co.jp/api/search",
          {
            params: {
              zipcode: enteredZipcode
            },
          }
        );

        if (res.data.results) {
          const result = res.data.results[0];
          setAddress({
            address1: result["address1"],
            address2: result["address2"],
            address3: result["address3"],
          });
        }
      } catch {
        alert("住所の取得に失敗しました。");
      }
    }
  };

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
            <Button onClick={close}>変更する</Button>
          </ButtonWrapper>
        </div>
      </ModalWrapper>
    </Modal>
  );
};

export default AddressChangeForm;
