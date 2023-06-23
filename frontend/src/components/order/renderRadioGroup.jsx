import React , { useState } from 'react';
import { FormControlLabel, Radio, RadioGroup, Box } from '@mui/material';
import Credit from '../credit/Credit';

const RenderRadioGroup = ({ input, meta: { touched, error } }) => {

  const [open, setOpen] = useState(false)
  const [defaultval, IsDefaultVal] = useState(1)

  const creditOpen = () => {
    setOpen(true)
    IsDefaultVal(0)
  }

  const creditClose = () => {
    setOpen(false)
    IsDefaultVal(1)
  }

  return (
    <Box display="flex" justifyContent="center">
      <div>
        <RadioGroup {...input} value={defaultval}>
          <FormControlLabel value={1} control={<Radio />} label="代引き" onClick={creditClose} />
          <FormControlLabel value={0} control={<Radio />} label="クレジット" onClick={creditOpen} />
          {open && <Credit />}
        </RadioGroup>
        {touched && error && <span>{error}</span>}
      </div>
    </Box>
  )
};

export default RenderRadioGroup
