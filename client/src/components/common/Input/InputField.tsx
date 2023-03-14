import React from 'react';
import Input from './Input';
import InputLabel from './InputLabel';

import { InputFieldStyle } from './InputStyles';

interface InputFieldProps {
  element: 'input' | 'textarea';
  label: string;
  name: string;
  placeholder?: string;
}

const InputField = ({ element, label, name, placeholder }: InputFieldProps) => {
  return (
    <InputFieldStyle>
      <InputLabel name={name}>{label}</InputLabel>
      <Input element={element} name={name} placeholder={placeholder} />
    </InputFieldStyle>
  );
};

export default InputField;
