import { useState } from 'react';

import Container from '../common/Container/Container';
import InputField from '../common/Input/InputField';

import { CenterGridLayout, FlexBox } from '../common/Layout/Layout.style';
import { ContainerWithBackground } from '../common/Container/Container.style';
import { Heading2 } from '../common/Heading/Heading.style';
import { PrimaryButton } from '../common/Button/Button.style';
import { Form } from '../Form/Form.style';

const Signup = () => {
  const [step, setStep] = useState(1);

  return (
    <CenterGridLayout>
      <FlexBox>
        <ContainerWithBackground bg variant="form" />
        <Container variant="form">
          <FlexBox col center gap={40}>
            <Heading2 center>회원가입</Heading2>
            <Form>
              {step === 1 && (
                <>
                  <InputField
                    element="input"
                    label="Email"
                    type="email"
                    placeholder="example@example.com"
                  />
                  <InputField
                    element="input"
                    label="Password"
                    type="password"
                  />
                  <PrimaryButton size="lg">다음</PrimaryButton>
                </>
              )}
              {step === 2 && (
                <>
                  <InputField
                    element="input"
                    label="Name"
                    type="text"
                    placeholder="홍길동"
                  />
                  <InputField
                    element="textarea"
                    label="Bio"
                    placeholder="소개글을 작성해주세요!"
                  />
                  <PrimaryButton size="lg">다음</PrimaryButton>
                </>
              )}
              {step === 3 && (
                <>
                  <InputField element="input" label="Job" type="text" />
                  <InputField
                    element="input"
                    label="Profile Image"
                    type="file"
                  />
                  <PrimaryButton size="lg">회원가입</PrimaryButton>
                </>
              )}
            </Form>
          </FlexBox>
        </Container>
      </FlexBox>
    </CenterGridLayout>
  );
};

export default Signup;
