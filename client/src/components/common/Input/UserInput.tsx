import { useForm } from 'react-hook-form';

import { Input, Textarea } from './Input.style';

interface UserInputProps {
  element: 'input' | 'textarea';
  id: string;
  type: React.HTMLInputTypeAttribute | undefined;
  placeholder: string | undefined;
}

const UserInput = ({ element, id, type, placeholder }: UserInputProps) => {
  const { register } = useForm();

  return (
    <>
      {element === 'input' ? (
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          {...register(id)}
        />
      ) : (
        <Textarea id={id} placeholder={placeholder} {...register(id)} />
      )}
    </>
  );
};

export default UserInput;
