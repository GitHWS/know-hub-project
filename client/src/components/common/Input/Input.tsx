import { useForm } from 'react-hook-form';

import { InputStyle } from './InputStyles';

interface InputProps {
  name: string;
  placeholder: string | undefined;
}

const Input = ({ name, placeholder }: InputProps) => {
  const { register } = useForm();

  return <InputStyle {...register(name)} id={name} placeholder={placeholder} />;
};

export default Input;
