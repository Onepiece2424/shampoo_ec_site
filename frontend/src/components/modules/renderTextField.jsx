import { TextField } from '@mui/material';

export const renderTextField = ({
  input,
  label,
  placeholder,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={placeholder}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);
