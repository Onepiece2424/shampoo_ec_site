import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { Button, TextField } from '@mui/material';

const renderTextField = ({
  input,
  label,
  placeholder,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={placeholder}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

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
