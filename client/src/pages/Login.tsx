import InputField from '../components/common/Input/InputField';
import { Heading2 } from '../components/common/Heading/HeadingStyles';
import { PrimaryButton } from '../components/common/Button/ButtonStyles';
import {
  GridLayout,
  LoginForm,
  LoginSideBox,
  SignupText,
  SignupLink,
} from '../components/Login/LoginStyles';

const Login = () => {
  return (
    <GridLayout>
      <LoginSideBox bg />
      <LoginSideBox>
        <Heading2 center>회원 계정으로 로그인하세요!</Heading2>
        <LoginForm>
          <InputField
            element="input"
            label="Email"
            type="email"
            placeholder="example@example.com"
          />
          <InputField element="input" label="Password" type="password" />
          <PrimaryButton size="lg">로그인</PrimaryButton>
        </LoginForm>
        <SignupText>
          처음 방문하셨나요?
          <SignupLink to="/signup">회원가입</SignupLink>
        </SignupText>
      </LoginSideBox>
    </GridLayout>
  );
};

export default Login;
