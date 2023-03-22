import styled, { css } from 'styled-components';
import { theme } from '../../../../styles/theme';

import iconReact from '../../../../assets/images/icon_react.svg';
import iconVue from '../../../../assets/images/icon_vue.svg';

interface StyledTabButtonProps {
  isSelected: boolean;
  title: string;
}

export const TabButtonStyles = styled.button<StyledTabButtonProps>`
  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 1.2rem;
  width: 100%;

  border-radius: 0.5rem;

  font-size: 2rem;
  ${({ isSelected }) =>
    isSelected
      ? css`
          font-weight: ${theme.font.weight.bold};
          color: ${theme.colors.font.white};
          background-color: ${theme.colors.bg.primary};
        `
      : css`
          color: ${theme.colors.font.white};
          background-color: ${theme.colors.common.grey};
        `}

  &::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 24px;

    ${({ title }) =>
      title === 'react' &&
      css`
        background-image: url(${iconReact});
      `}
    ${({ title }) =>
      title === 'vue' &&
      css`
        background-image: url(${iconVue});
      `}
  }
`;
