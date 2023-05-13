import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Button } from '@mui/material';
// api
import { userDataCreate } from '../../apis/signUp';
// components
import { renderTextField } from '../modules/renderTextField';


const SignUp = (props) => {

  const { handleSubmit } = props;
  const form = useSelector(state => state.form);
  const values = form && form.signUpForm && form.signUpForm.values;

  const pageFlag = useSelector(state => state.pageFlag)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  // ユーザーの新規登録
  const userDataSubmit = async(e) => {
    e.preventDefault();
    const params = {
      name: values.name,
      email: values.email,
      password: values.password,
      password_confirmation: values.password_confirmation
    }

    // ユーザー情報を送信
    await userDataCreate(params, dispatch)
  };

  // ユーザー情報作成後、登録完了ページ遷移
  useEffect(() => {
    if (pageFlag.flag) {
      navigate('/sign_up_confirmation');
    }
  }, [pageFlag.flag, navigate]);

  return (
    <form onSubmit={handleSubmit}>
      <br></br>
      <br></br>
      <Field
        name="name"
        component={renderTextField}
        label="名前"
        placeholder="名前を入力してください。"
        style={{ width: 280 }}
      />
      <br></br>
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
      <Field
        name="password-confirmation"
        component={renderTextField}
        label="パスワード確認"
        placeholder="もう一度パスワードを入力してください。"
        style={{ width: 280 }}
      />
      <br></br>
      <br></br>
      <Button variant="outlined" onClick={userDataSubmit}>新規登録</Button>
    </form>
  );
};

export default reduxForm({
  form: 'signUpForm',
})(SignUp);
