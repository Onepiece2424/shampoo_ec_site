import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    // const response = await axios.post('http://localhost:3010/api/v1/auth', {
    //   email: email,
    //   password: password,
    //   password_confirmation: password_confirmation,
    //   name: name,
    // })
    // console.log(response)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">名前</label>
        <input type="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="email">メールアドレス</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">パスワード</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password-confirmation">パスワード確認</label>
        <input type="password" id="password-confirmation" value={password_confirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
      </div>
      {/* <div>
        <label htmlFor="address">住所</label>
        <input type="address" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div>
        <label htmlFor="phonenumber">電話番号</label>
        <input type="phonenumber" id="phonenumber" value={phonenumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </div>
      <div>
        <label htmlFor="birthday">誕生日</label>
        <input type="birthday" id="birthday" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
      </div>
      <div>
        <label htmlFor="gender">性別</label>
        <input type="gender" id="gender" value={gender} onChange={(e) => setGender(e.target.value)} />
      </div> */}
      <button type="submit">新規登録</button>
    </form>
  );
};

export default SignUp;
