import React, { useState } from 'react';
import { Field } from 'redux-form';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

const getFields = () => [
  { type: 'number', name: 'number', placeholder: 'Card Number' },
  { type: 'name', name: 'name', placeholder: 'Name' },
  { type: 'number', name: 'expiry', placeholder: 'Card Expiry' },
  { type: 'number', name: 'cvc', placeholder: 'Card CVC' },
];

const PaymentForm = ({ handleSubmit }) => {
  const [focus, setFocus] = useState('');
  const [formData, setFormData] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
  });
  const fields = getFields();

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setFocus(evt.target.name);
  };

  return (
    <div>
      <Cards focused={focus} {...formData} />
        {fields.map((field) => (
          <div style={ {margin : '10px'} } key={field.name}>
            <Field
              key={field.name}
              component='input'
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
        ))}
    </div>
  );
};

export default PaymentForm;
