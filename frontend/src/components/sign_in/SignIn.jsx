import React from 'react'
import { useDispatch ,useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button } from '@mui/material';

// components
import { renderTextField } from '../modules/renderTextField';
import { verifyUserData } from '../../apis/signIn';

const SignIn = (props) => {

  const { handleSubmit } = props;
  const dispatch = useDispatch()
  const form = useSelector(state => state.form);
  const values = form && form.signInForm && form.signInForm.values;

  // ユーザー情報（アドレスとパスワード）の送信
  const submitLoginUserData = (e) => {
    e.preventDefault();

    const params = {
      email: values.email,
      password: values.password
    }

    verifyUserData(params, dispatch)
  }

  return (
    <>
      <br></br>
      <div>
        ログインページです。
      </div>
      <br></br>
      <form onSubmit={handleSubmit}>
        <br></br>
        <Field
          name="email"
          component={renderTextField}
          label="メールアドレス"
          placeholder="メールアドレスを入力してください。"
          style={{ width: 280 }}
        />
        <br></br>
        <br></br>
        <Field
          name="password"
          component={renderTextField}
          label="パスワード"
          placeholder="パスワードを入力してください。"
          style={{ width: 280 }}
        />
        <br></br>
        <br></br>
        <Button variant="outlined" onClick={submitLoginUserData}>ログイン</Button>
      </form>
    </>
  )
}

export default reduxForm({
  form: 'signInForm',
})(SignIn);
