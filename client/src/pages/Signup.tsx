import { useState } from 'react';

import InputField from '../components/common/Input/InputField';

import { CenterGridLayout } from '../components/common/Layout/LayoutStyles';
import { FlexAlignCenter } from '../components/common/Layout/LayoutStyles';
import { Heading2 } from '../components/common/Heading/HeadingStyles';
import { PrimaryButton } from '../components/common/Button/ButtonStyles';
import { Form, InputWrapBox } from '../components/Form/FormStyles';

const Signup = () => {
  const [signupStep, setSignupStep] = useState(1);

  return (
    <CenterGridLayout>
      <FlexAlignCenter>
        <InputWrapBox bg="image" />
        <InputWrapBox col gap={40}>
          <Heading2 center>회원가입</Heading2>
          <Form>
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
          </Form>
        </InputWrapBox>
      </FlexAlignCenter>
    </CenterGridLayout>
  );
};

export default Signup;
