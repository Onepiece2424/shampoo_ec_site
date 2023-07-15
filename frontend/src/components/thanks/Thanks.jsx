import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { setupAxiosHeaders, createAPIInstance } from '../../modules/accessUserData';
import { fetchUserData } from '../../apis/fetchUserDara';

const Thanks = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  // ログインユーザーの取得
  useEffect(() => {
    const accessToken = localStorage.getItem('access-token');
    const client = localStorage.getItem('client');
    const uid = localStorage.getItem('uid');

    setupAxiosHeaders(accessToken, client, uid);
    const api = createAPIInstance(accessToken, client, uid);

    fetchUserData(api.defaults.headers.common, dispatch)
  }, [dispatch])

  return (
    <div>
      <div className='thanks-text'>
        注文完了しました。ご注文ありがとうございました。
      </div>
      <Button variant="outlined" style={{ margin: '3mm'}} onClick={() => navigate('/')}>トップへ戻る</Button>
      <Button variant="outlined" style={{ margin: '3mm'}} onClick={() => navigate('/items')}>買い物を続ける</Button>
    </div>
  )
}

export default Thanks
