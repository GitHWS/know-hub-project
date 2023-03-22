import { ButtonStyle } from './Button.style';

export type ButtonSizeType = 'lg' | 'md' | 'sm';

interface ButtonProps {
  size: ButtonSizeType;
  children: React.ReactNode;
}

const Button = ({ size, children }: ButtonProps) => {
  return <ButtonStyle size={size}>{children}</ButtonStyle>;
};

export default Button;
