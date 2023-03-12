import React from 'react';
import Input from './Input';
import InputLabel from './InputLabel';

import { InputFieldStyle } from './InputStyles';

interface InputFieldProps {
  label: string;
  name: string;
  placeholder?: string;
}

const InputField = ({ label, name, placeholder }: InputFieldProps) => {
  return (
    <InputFieldStyle>
      <InputLabel name={name}>{label}</InputLabel>
      <Input name={name} placeholder={placeholder} />
    </InputFieldStyle>
  );
};

export default InputField;
