import styled, { css } from 'styled-components';

interface FlexBoxProps {
  col?: boolean;
  center?: boolean;
  between?: boolean;
  gap?: number;
}

export const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  flex-direction: ${({ col }) => (col ? 'column' : 'row')};
  gap: ${({ gap }) => `${gap}px`};

  ${({ col, center }) =>
    col && center
      ? css`
          align-items: center;
        `
      : css`
          justify-content: center;
        `};

  ${({ col, between }) =>
    !col && between
      ? css`
          justify-content: space-between;
          align-items: center;
        `
      : css`
          justify-content: flex-start;
        `}
`;
