import { useState } from 'react';
import Button from '../components/common/Button/Button';
import { Heading2 } from '../components/common/Heading/HeadingStyles';
import InputField from '../components/common/Input/InputField';
import {
  GridLayout,
  LoginForm,
  LoginSideBox,
  SignupLink,
  SignupText,
} from '../components/Login/LoginStyles';

const Signup = () => {
  const [signupStep, setSignupStep] = useState(3);

  return (
    <GridLayout>
      <LoginSideBox bg />
      <LoginSideBox>
        <Heading2 center>회원가입</Heading2>
        <LoginForm>
          {signupStep === 1 && (
            <>
              <InputField
                element="input"
                label="Email"
                type="email"
                placeholder="example@example.com"
              />
              <InputField element="input" label="Password" type="password" />
              <Button padding="lg" primary>
                다음
              </Button>
            </>
          )}
          {signupStep === 2 && (
            <>
              <InputField element="input" label="Name" type="text" />
              <InputField element="textarea" label="Bio" />
              <Button padding="lg" primary>
                다음
              </Button>
            </>
          )}
          {signupStep === 3 && (
            <>
              <InputField element="input" label="Profile Image" type="file" />
              <Button padding="lg" primary>
                회원가입
              </Button>
            </>
          )}
        </LoginForm>
      </LoginSideBox>
    </GridLayout>
  );
};

export default Signup;
