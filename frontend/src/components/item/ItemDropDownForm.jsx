import React from 'react';
import { Field, reduxForm } from 'redux-form';

const renderDropdown = ({ input, label, range, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <select {...input}>
        {range.map(value => <option value={value} key={value}>{value}</option>)}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const validate = values => {
  const errors = {};
  if (!values.quantity) {
    errors.quantity = '必須です';
  }
  return errors;
};

const ItemDropDownForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="quantity"
          component={renderDropdown}
          label="数量"
          range={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} // 1~10の選択範囲
        />
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'orderForm',
  validate
})(ItemDropDownForm);
