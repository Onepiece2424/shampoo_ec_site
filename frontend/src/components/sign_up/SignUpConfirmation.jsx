import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';

// function
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

  return (
    <div>
      新規登録完了しました。
    </div>
  )
}

export default SignUpConfirmation
