import styled, { css } from 'styled-components';
import theme from '../../../styles/theme';
import { ButtonSizeType } from './Button';

interface ButtonProps {
  size: ButtonSizeType;
}

export const StyledButton = styled.button<ButtonProps>`
  padding: 1rem;
  border-radius: 0.5rem;
  height: fit-content;

  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.colors.white};

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

export const PrimaryButton = styled(StyledButton)`
  background-color: ${theme.colors.primary};
`;

export const SecondaryButton = styled(StyledButton)`
  background-color: ${theme.colors.secondary};
`;

export const ClearButton = styled(StyledButton)`
  background-color: transparent;
`;
