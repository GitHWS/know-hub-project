import { StyledContainer } from './Container.style';

export type Variant = 'form' | 'post';

interface ContainerProps {
  variant: Variant;
  bg?: boolean;
  children?: React.ReactNode;
}

const Container = ({ variant, bg, children }: ContainerProps) => {
  return (
    <StyledContainer variant={variant} bg={bg}>
      {children}
    </StyledContainer>
  );
};

export default Container;
