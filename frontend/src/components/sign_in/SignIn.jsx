import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { Button } from '@mui/material';

// components
import { renderTextField } from '../modules/renderTextField';

const SignIn = () => {
  return (
    <>
      <br></br>
      <div>
        ログインページです。
      </div>
      <br></br>
      <form>
        <br></br>
        <Field
          name="email"
          component={renderTextField}
          label="メールアドレス"
          placeholder="メールアドレスを入力してください。"
          style={{ width: 230 }}
        />
        <br></br>
        <br></br>
        <Field
          name="password"
          component={renderTextField}
          label="パスワード"
          placeholder="パスワードを入力してください。"
          style={{ width: 230 }}
        />
        <br></br>
        <br></br>
        <Button variant="outlined">ログイン</Button>
      </form>
    </>
  )
}

export default reduxForm({
  form: 'signInForm',
})(SignIn);
