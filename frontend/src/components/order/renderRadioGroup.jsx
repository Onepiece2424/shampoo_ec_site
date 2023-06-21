import React , { useState } from 'react';
import { FormControlLabel, Radio, RadioGroup, Box } from '@mui/material';
import Credit from '../credit/Credit';

const RenderRadioGroup = ({ input, meta: { touched, error } }) => {

  const [open, setOpen] = useState(false)

  const creditOpen = () => {
    setOpen(true)
  }

  const creditClose = () => {
    setOpen(false)
  }

  return (
    <Box display="flex" justifyContent="center">
      <div>
        <RadioGroup {...input}>
          <FormControlLabel value={0} control={<Radio />} label="クレジット" onClick={creditOpen} />
          {open && <Credit />}
          <FormControlLabel value={1} control={<Radio />} label="代引き" onClick={creditClose} />
        </RadioGroup>
        {touched && error && <span>{error}</span>}
      </div>
    </Box>
  )
};

export default RenderRadioGroup
