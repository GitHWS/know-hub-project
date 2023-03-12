import { ButtonStyles } from './ButtonStyles';

interface ButtonProps {
  padding: 'lg' | 'md' | 'sm';
  primary?: boolean;
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  return <ButtonStyles {...props}>{props.children}</ButtonStyles>;
};

export default Button;
