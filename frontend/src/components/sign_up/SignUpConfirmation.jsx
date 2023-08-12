import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { useLocation, Link } from 'react-router-dom';
import { fetchUserData } from '../../apis/fetchUserDara';
import { pageTransitionFlag } from '../../reducks/reducers/common';

const SignUpConfirmation = () => {

  const dispatch = useDispatch()
  const location = useLocation()

  // 登録完了ページに切り替えるためのフラグ（state）を初期化
  useEffect(() => {
    const cleanupState = () => {
      if (location.pathname === '/sign_up_confirmation') {
        dispatch(pageTransitionFlag(false))
      }
    };

    return () => {
      cleanupState();
    };
  }, [location.pathname, dispatch]);

  useEffect(() => {
    fetchUserData(dispatch)
  }, [dispatch])

  return (
    <>
      <br></br>
      <div>
        新規登録完了しました。
      </div>
      <br></br>
      <div>
        購入は<Link to="/">こちら</Link>から
      </div>
    </>
  )
}

export default SignUpConfirmation
