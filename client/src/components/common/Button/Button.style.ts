import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';
import { ButtonSizeType } from './Button';

interface ButtonProps {
  size: ButtonSizeType;
}

export const ButtonStyle = styled.button<ButtonProps>`
  padding: 1rem;
  border-radius: 0.5rem;
  height: fit-content;

  font-size: ${theme.font.size.sm};
  font-weight: ${theme.font.weight.bold};
  color: ${theme.colors.font.white};

  transition: all 0.3s;

  ${({ size }) => {
    switch (size) {
      case 'lg':
        return css`
          width: 100%;
          padding: 1.5rem;
        `;
      case 'md':
        return css`
          min-width: 150px;
        `;
      case 'sm':
        return css`
          min-width: 100px;
        `;
    }
  }}

  &:hover {
    filter: brightness(0.7);
  }
`;

export const PrimaryButton = styled(ButtonStyle)`
  background-color: ${theme.colors.bg.primary};
`;

export const SecondaryButton = styled(ButtonStyle)`
  background-color: ${theme.colors.bg.highlight};
`;

export const ClearButton = styled(ButtonStyle)`
  background-color: transparent;
`;
