import React from 'react';
import { FormControlLabel, Radio, RadioGroup, Box } from '@mui/material';

const renderRadioGroup = ({ input, meta: { touched, error } }) => (
  <Box display="flex" justifyContent="center">
    <div>
      <RadioGroup {...input}>
        <FormControlLabel value="credit" control={<Radio />} label="クレジット" />
        <FormControlLabel value="cash_on_delivery" control={<Radio />} label="代引き" />
      </RadioGroup>
      {touched && error && <span>{error}</span>}
    </div>
  </Box>
);

export default renderRadioGroup
