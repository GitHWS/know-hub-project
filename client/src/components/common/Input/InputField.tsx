import { FlexContainer } from '../Layout/Layout.style';

interface InputFieldProps {
  children: React.ReactNode;
}

const InputField = ({ children }: InputFieldProps) => {
  return (
    <FlexContainer col gap={0.7}>
      {children}
    </FlexContainer>
  );
};

export default InputField;
