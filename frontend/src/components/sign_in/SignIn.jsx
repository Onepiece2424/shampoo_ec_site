import React, { useEffect } from 'react'
import { useDispatch ,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
  const pageFlag = useSelector(state => state.pageFlag)
  const navigate = useNavigate();

  // ユーザー情報（アドレスとパスワード）の送信
  const submitLoginUserData = (e) => {
    e.preventDefault();

    const params = {
      email: values.email,
      password: values.password
    }

    verifyUserData(params, dispatch)
  }

  // ログイン後、トップページ遷移
  useEffect(() => {
    if (pageFlag.flag) {
      navigate('/');
    }
  }, [pageFlag.flag, navigate]);

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
      <br></br>
      <br></br>
      <br></br>
      <div>会員登録がまだの方はこちらへ</div>
      <br></br>
      <Button variant="outlined" onClick={() => navigate('/users/sign_up')}>新規会員登録（無料）</Button>
    </>
  )
}

export default reduxForm({
  form: 'signInForm',
})(SignIn);
