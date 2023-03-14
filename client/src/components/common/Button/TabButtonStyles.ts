import styled, { css } from 'styled-components';

import { theme } from '../../../styles/theme';
import iconReact from '../../../assets/images/icon_react.svg';
import iconVue from '../../../assets/images/icon_vue.svg';

interface StyledTabButtonProps {
  isSelected: boolean;
  title: string;
}

export const TabButtonStyles = styled.button<StyledTabButtonProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  padding: 12px;
  width: 100%;

  border-radius: 5px;

  font-size: 2rem;
  ${({ isSelected }) =>
    isSelected
      ? css`
          font-weight: 900;
          color: ${theme.colors.white};
          background-color: ${theme.colors.primary};
        `
      : css`
          color: ${theme.colors.lightGrey};
          background-color: ${theme.colors.grey};
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