import { useForm } from 'react-hook-form';

import { InputStyle, TextareaStyle } from './InputStyles';

interface InputProps {
  element: 'input' | 'textarea';
  name: string;
  placeholder: string | undefined;
}

const Input = ({ element, name, placeholder }: InputProps) => {
  const { register } = useForm();

  return (
    <>
      {element === 'input' ? (
        <InputStyle
          {...register(name)}
          id={name}
          type={name}
          placeholder={placeholder}
        />
      ) : (
        <TextareaStyle
          {...register(name)}
          id={name}
          placeholder={placeholder}
        />
      )}
    </>
  );
};

export default Input;
