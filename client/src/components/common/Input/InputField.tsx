import UserInput from './UserInput';
import { InputBox, Label } from './InputStyles';

interface InputFieldProps {
  element: 'input' | 'textarea';
  label: string;
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
}

const InputField = ({ element, label, type, placeholder }: InputFieldProps) => {
  return (
    <InputBox>
      <Label htmlFor={type}>{label}</Label>
      <UserInput
        element={element}
        id={type}
        type={type}
        placeholder={placeholder}
      />
    </InputBox>
  );
};

export default InputField;
