import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const availableTimeRanges = [
  { label: '午前中', start: '00:00', end: '12:00', value: 0 },
  { label: '12:00 - 14:00', start: '12:00', end: '14:00', value: 1 },
  { label: '14:00 - 16:00', start: '14:00', end: '16:00', value: 2 },
  { label: '16:00 - 18:00', start: '16:00', end: '18:00', value: 3 },
  { label: '18:00 - 20:00', start: '18:00', end: '20:00', value: 4 }
];

const TimePickerField = ({ input, label, meta: { touched, error } }) => (
  <div>
    <FormControl error={touched && !!error} style={{ width: '200px' }}>
      <InputLabel>{label}</InputLabel>
      <Select {...input}>
        <MenuItem value="">選択してください</MenuItem>
        {availableTimeRanges.map((timeRange, index) => (
          <MenuItem key={index} value={timeRange.value}>
            {timeRange.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    {touched && error && <span>{error}</span>}
  </div>
);

export default TimePickerField;
