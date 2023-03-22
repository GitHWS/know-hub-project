import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';

interface FlexBoxProps {
  col?: boolean;
  center?: boolean;
  between?: boolean;
  base?: 'start' | 'center' | 'end';
  gap?: number;

  styleProps?: {
    overflow?: 'hidden' | 'scroll';
    padding?: number;
    bg?: boolean;
  };
}

export const FlexBox = styled.div<FlexBoxProps>`
  ${({ col }) => (col ? theme.layout.flex.col : theme.layout.flex.row)}
  ${({ between }) => between && theme.layout.flex.between}
  ${({ center }) => center && theme.layout.flex.center}
  gap: ${({ gap }) => gap && `${gap / 10}rem`};

  ${({ base }) => {
    switch (base) {
      case 'start':
        return css`
          align-items: flex-start;
        `;
      case 'center':
        return css`
          align-items: center;
        `;
      case 'end':
        return css`
          align-items: flex-end;
        `;
      default:
        return css`
          align-items: stretch;
        `;
    }
  }}

  ${({ styleProps }) =>
    styleProps?.overflow === 'hidden' &&
    css`
      overflow: hidden;
    `}

    ${({ styleProps }) =>
    styleProps?.overflow === 'scroll' &&
    css`
      overflow: scroll;
    `}

  ${({ styleProps }) =>
    styleProps?.padding &&
    css`
      padding: ${styleProps.padding / 10}rem;
    `}

  ${({ styleProps }) =>
    styleProps?.bg &&
    css`
      background-color: ${theme.colors.common.grey};
    `}
`;

export const CenterGridLayout = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
`;

export const HomeLayout = styled.div`
  display: flex;
  height: 100vh;
`;
