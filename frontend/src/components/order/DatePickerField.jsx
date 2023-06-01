import React from 'react';
// import DatePicker from '@mui/lab/DatePicker';
import { DatePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';

const DatePickerField = ({
  input: { value, onChange },
  meta: { touched, error },
  ...custom
}) => {
  return (
    <div>
      <DatePicker
        {...custom}
        value={value || null}
        onChange={onChange}
        renderInput={(params) =>
          <TextField {...params} error={touched && error} />
        }
      />
    </div>
  );
};

export default DatePickerField;
