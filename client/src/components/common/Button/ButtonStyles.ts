import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';

interface StyledButtonProps {
  padding: 'lg' | 'md' | 'sm';
  primary?: boolean;
}

export const ButtonStyles = styled.button<StyledButtonProps>`
  font-size: 2rem;
  font-weight: 900;

  ${({ padding }) =>
    padding === 'lg' &&
    css`
      padding: 15px;
    `}
  ${({ padding }) =>
    padding === 'md' &&
    css`
      padding: 10px;
    `}
      ${({ padding }) =>
    padding === 'sm' &&
    css`
      padding: 5px;
      font-size: 1.4rem;
    `};

  width: 100%;
  border-radius: 5px;

  color: ${theme.colors.white};
  background: ${({ primary }) =>
    primary ? theme.colors.primary : theme.colors.highlight};

  transition: all 0.2s;

  &:hover {
    background-color: ${({ primary }) => (primary ? '#0059c1' : '#bb4242')};
  }
`;
