import Container from '../common/Container/Container';
import SignupForm from '../Form/SignupForm';

import { CenterGridLayout, FlexBox } from '../common/Layout/Layout.style';
import { ContainerWithBackground } from '../common/Container/Container.style';
import { Heading2 } from '../common/Heading/Heading.style';

const Signup = () => {
  return (
    <CenterGridLayout>
      <FlexBox>
        <ContainerWithBackground bg variant="form" />
        <Container variant="form">
          <FlexBox col center gap={40}>
            <Heading2 center>회원가입</Heading2>
            <SignupForm />
          </FlexBox>
        </Container>
      </FlexBox>
    </CenterGridLayout>
  );
};

export default Signup;
