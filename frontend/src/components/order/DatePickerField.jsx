import React from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import moment from 'moment';

const DatePickerField = ({
  input: { value, onChange },
  meta: { touched, error },
  ...custom
}) => {

  // 選択した日付を「YYYY-MM-DD」の形に変換
  const handleDateChange = (selectedDate) => {
    if (selectedDate) {
      const formattedDate = moment(selectedDate.$d).format('YYYY-MM-DD');
      onChange(formattedDate);
    } else {
      onChange(null);
    }
  };

  const parseInputValue = (value) => {
    if (value) {
      return moment(value).toDate();
    }
    return null;
  };

  return (
    <div>
      <DatePicker
        {...custom}
        value={parseInputValue(value)}
        onChange={handleDateChange}
        textField={(params) =>
          <TextField {...params} error={touched && error} />
        }
      />
    </div>
  );
};

export default DatePickerField;
