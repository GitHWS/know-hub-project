import UserInput from './UserInput';
import { Label } from './Input.style';
import { FlexBox } from '../Layout/Layout.style';

interface InputFieldProps {
  element: 'input' | 'textarea';
  label: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
}

const InputField = ({ element, label, type, placeholder }: InputFieldProps) => {
  return (
    <FlexBox col gap={5}>
      <Label htmlFor={type}>{label}</Label>
      <UserInput
        element={element}
        id={label}
        type={type}
        placeholder={placeholder}
      />
    </FlexBox>
  );
};

export default InputField;
