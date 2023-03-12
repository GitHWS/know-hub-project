import { InputLabelStyle } from './InputStyles';

interface InputLabelProps {
  name: string;
  children: React.ReactNode;
}

const InputLabel = ({ children, name }: InputLabelProps) => {
  return <InputLabelStyle htmlFor={name}>{children}</InputLabelStyle>;
};

export default InputLabel;
