import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';

interface ButtonProps {
  size: 'lg' | 'md' | 'sm';
}

// 공통 Button 스타일
export const ButtonStyle = styled.button<ButtonProps>`
  padding: 1rem;
  border-radius: 0.5rem;
  height: fit-content;

  font-weight: 900;
  color: ${theme.colors.white};

  transition: all 0.3s;

  ${({ size }) =>
    size === 'lg' &&
    css`
      width: 100%;
      padding: 1.5rem;
      font-size: 2rem;
    `}

  ${({ size }) =>
    size === 'md' &&
    css`
      min-width: 150px;
      font-size: 1.8rem;
    `}

    ${({ size }) =>
    size === 'sm' &&
    css`
      min-width: 100px;
      font-size: 1.4rem;
    `};

  &:hover {
    filter: brightness(0.7);
  }
`;

// 배경색 추가된 버튼(Primary, Highlight, clear)
export const PrimaryButton = styled(ButtonStyle)`
  background-color: ${theme.colors.primary};
`;

export const SecondaryButton = styled(ButtonStyle)`
  background-color: ${theme.colors.highlight};
`;

export const ClearButton = styled(ButtonStyle)`
  background-color: transparent;
`;
