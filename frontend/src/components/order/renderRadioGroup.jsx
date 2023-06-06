import React from 'react';
import { FormControlLabel, Radio, RadioGroup, Box } from '@mui/material';

const renderRadioGroup = ({ input, meta: { touched, error } }) => (
  <Box display="flex" justifyContent="center">
    <div>
      <RadioGroup {...input}>
        <FormControlLabel value={0} control={<Radio />} label="クレジット" />
        <FormControlLabel value={1} control={<Radio />} label="代引き" />
      </RadioGroup>
      {touched && error && <span>{error}</span>}
    </div>
  </Box>
);

export default renderRadioGroup
