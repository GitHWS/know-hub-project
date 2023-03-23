import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { theme } from '../../styles/theme';

export const Form = styled.form`
  ${theme.layout.flex.col};
  gap: 20px;
`;

export const SignupText = styled.p`
  text-align: center;
  font-size: 1.6rem;
  color: ${theme.colors.font.white};
`;

export const SignupLink = styled(Link)`
  margin-left: 5px;
  font-weight: 900;
  transition: all 0.2s;

  &:hover,
  &:active {
    color: ${theme.colors.bg.primary};
  }
`;

export const ErrorMessage = styled.span`
  font-size: 1.2rem;
  color: ${theme.colors.bg.highlight};
`;
