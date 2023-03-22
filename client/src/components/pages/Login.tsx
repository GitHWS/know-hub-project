import Container from '../common/Container/Container';
import InputField from '../common/Input/InputField';

import { CenterGridLayout, FlexBox } from '../common/Layout/Layout.style';
import { ContainerWithBackground } from '../common/Container/Container.style';
import { Heading2 } from '../common/Heading/Heading.style';
import { PrimaryButton } from '../common/Button/Button.style';
import { Form, SignupText, SignupLink } from '../Form/Form.style';

const Login = () => {
  return (
    <CenterGridLayout>
      <FlexBox>
        <ContainerWithBackground bg variant="form" />
        <Container variant="form">
          <FlexBox col center gap={40}>
            <Heading2 center>로그인</Heading2>
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
              처음 방문하셨나요? <SignupLink to="/signup">회원가입</SignupLink>
            </SignupText>
          </FlexBox>
        </Container>
      </FlexBox>
    </CenterGridLayout>
  );
};

export default Login;
