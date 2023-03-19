import InputField from '../components/common/Input/InputField';

import { FlexAlignCenter } from '../components/common/Layout/LayoutStyles';
import { CenterGridLayout } from '../components/common/Layout/LayoutStyles';
import { Heading2 } from '../components/common/Heading/HeadingStyles';
import { PrimaryButton } from '../components/common/Button/ButtonStyles';
import {
  Form,
  InputWrapBox,
  SignupText,
  SignupLink,
} from '../components/Form/FormStyles';

const Login = () => {
  return (
    <CenterGridLayout>
      <FlexAlignCenter>
        <InputWrapBox bg="image" />
        <InputWrapBox col gap={40}>
          <Heading2 center>회원 계정으로 로그인하세요!</Heading2>
          <Form>
            <InputField
              element="input"
              label="Email"
              type="email"
              placeholder="example@example.com"
            />
            <InputField element="input" label="Password" type="password" />
            <PrimaryButton size="lg">로그인</PrimaryButton>
          </Form>
          <SignupText>
            처음 방문하셨나요?
            <SignupLink to="/signup">회원가입</SignupLink>
          </SignupText>
        </InputWrapBox>
      </FlexAlignCenter>
    </CenterGridLayout>
  );
};

export default Login;
