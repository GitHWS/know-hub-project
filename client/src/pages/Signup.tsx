import { useState } from 'react';

import InputField from '../components/common/Input/InputField';
import { PrimaryButton } from '../components/common/Button/ButtonStyles';
import { Heading2 } from '../components/common/Heading/HeadingStyles';
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
              <PrimaryButton size="lg">다음</PrimaryButton>
            </>
          )}
          {signupStep === 2 && (
            <>
              <InputField element="input" label="Name" type="text" />
              <InputField element="textarea" label="Bio" />
              <PrimaryButton size="lg">다음</PrimaryButton>
            </>
          )}
          {signupStep === 3 && (
            <>
              <InputField element="input" label="Profile Image" type="file" />
              <PrimaryButton size="lg">회원가입</PrimaryButton>
            </>
          )}
        </LoginForm>
      </LoginSideBox>
    </GridLayout>
  );
};

export default Signup;
