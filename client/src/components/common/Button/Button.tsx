import { StyledButton } from './Button.style';

export type ButtonSizeType = 'lg' | 'md' | 'sm';

interface ButtonProps {
  size: ButtonSizeType;
  children: React.ReactNode;
}

const Button = ({ size, children }: ButtonProps) => {
  return <StyledButton size={size}>{children}</StyledButton>;
};

export default Button;
