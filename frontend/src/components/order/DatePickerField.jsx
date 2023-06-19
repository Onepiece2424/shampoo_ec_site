import React from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import moment from 'moment';

const DatePickerField = ({
  input: { value, onChange },
  meta: { touched, error },
  ...custom
}) => {

  const currentDate = new Date();
  const minDate = new Date(currentDate);
  minDate.setDate(minDate.getDate() + 2);

  const handleDateChange = (selectedDate) => {
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split('T')[0];
      onChange(formattedDate);
    } else {
      onChange(null);
    }
  };

  return (
    <div>
      <input
        type="date"
        value={value || ''}
        onChange={(e) => handleDateChange(new Date(e.target.value))}
        min={minDate.toISOString().split('T')[0]}
        {...custom}
      />
      {touched && error && <span>{error}</span>}
    </div>
  );
};

export default DatePickerField
