import Container from '../common/Container/Container';
import SignupForm from '../Form/SignupForm';

import {
  CenterGridLayout,
  FlexContainerAlign,
} from '../common/Layout/Layout.style';
import { ContainerWithBackground } from '../common/Container/Container.style';
import { Heading2 } from '../common/Heading/Heading.style';

const Signup = () => {
  return (
    <CenterGridLayout>
      <div>
        <ContainerWithBackground bg variant="form" />
        <Container variant="form">
          <FlexContainerAlign
            col
            justifyContent="center"
            alignItems="stretch"
            gap={4}>
            <Heading2 center>회원가입</Heading2>
            <SignupForm />
          </FlexContainerAlign>
        </Container>
      </div>
    </CenterGridLayout>
  );
};

export default Signup;
