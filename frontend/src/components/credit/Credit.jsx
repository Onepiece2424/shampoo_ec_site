import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import { Field } from 'redux-form';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

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
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div style={ {margin : '10px'} }>
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
      </form>
    </div>
  );
};

export default PaymentForm;
