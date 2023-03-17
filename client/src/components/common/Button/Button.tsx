import { ButtonStyle } from './ButtonStyles';

interface ButtonProps {
  size: 'lg' | 'md' | 'sm';
  children: React.ReactNode;
}

const Button = ({ size, children, ...rest }: ButtonProps) => {
  return <ButtonStyle size={size}>{children}</ButtonStyle>;
};

export default Button;
