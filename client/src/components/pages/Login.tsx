import Container from '../common/Container/Container';
import LoginForm from '../Form/LoginForm';

import { CenterGridLayout, FlexBox } from '../common/Layout/Layout.style';
import { ContainerWithBackground } from '../common/Container/Container.style';
import { Heading2 } from '../common/Heading/Heading.style';
import { SignupText, SignupLink } from '../Form/Form.style';

const Login = () => {
  return (
    <CenterGridLayout>
      <FlexBox>
        <ContainerWithBackground bg variant="form" />
        <Container variant="form">
          <FlexBox col center gap={40}>
            <Heading2 center>로그인</Heading2>
            <LoginForm />
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
