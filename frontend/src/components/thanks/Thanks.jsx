import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Thanks = () => {

  const navigate = useNavigate()

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
