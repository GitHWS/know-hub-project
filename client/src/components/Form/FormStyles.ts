import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { theme } from '../../styles/theme';
import { FlexBox, FlexBoxProps } from '../common/Layout/LayoutStyles';

interface InputWrapBoxProps extends FlexBoxProps {}

export const InputWrapBox = styled(FlexBox)<InputWrapBoxProps>`
  padding: 15rem 5rem;
  min-width: 30vw;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SignupText = styled.p`
  text-align: center;
  font-size: 1.6rem;
  color: ${theme.colors.white};
`;

export const SignupLink = styled(Link)`
  margin-left: 5px;
  font-weight: 900;
  transition: all 0.2s;

  &:hover,
  &:active {
    color: ${theme.colors.primary};
  }
`;
