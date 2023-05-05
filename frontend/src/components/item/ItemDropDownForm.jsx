import React from 'react';
import { FormControl, InputLabel, FormHelperText } from '@mui/material';
import SelectField from '@mui/material/Select';

const ItemDropDownForm = (props) => {
  const { label, input, meta: { touched, error }, children } = props;

  return (
    <FormControl fullWidth variant="outlined" error={touched && error}>
      <InputLabel>{label}</InputLabel>
      <SelectField {...input} label={label}>
        {children}
      </SelectField>
      {touched && error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  )
};

export default ItemDropDownForm
