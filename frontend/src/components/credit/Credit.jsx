import React from 'react'
import { useModal } from 'react-hooks-use-modal';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  background-color: #fff;
  padding: 10px 75px;
  border-radius: 10px;
`;

const Credit = ({ Modal, close }) => {

  return (
    <Modal>
      <ModalWrapper>
        <div className='credit-form'>
          クレカ登録入力フォームです。
        </div>
      </ModalWrapper>
    </Modal>
  )
}

export default Credit
