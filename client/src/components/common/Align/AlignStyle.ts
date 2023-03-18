import styled, { css } from 'styled-components';

interface FlexBoxProps {
  col?: boolean;
  base?: 'start' | 'center' | 'end';
  gap?: number;
}

export const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  flex-direction: ${({ col }) => (col ? 'column' : 'row')};
  gap: ${({ gap }) => `${gap}px`};

  ${({ base }) =>
    base === 'start' &&
    css`
      align-items: flex-start;
    `};

  ${({ base }) =>
    base === 'center' &&
    css`
      align-items: center;
    `};

  ${({ base }) =>
    base === 'end' &&
    css`
      align-items: flex-end;
    `};
`;

// FlexBox 내 첫 요소와 마지막 요소를 양쪽 끝으로 정렬하고 사이에 위치한 요소는 일정한 간격으로 정렬(메인 엑시스)
export const FlexAlignBetween = styled(FlexBox)`
  justify-content: space-between;
`;

// FlexBox 내 요소를 정중앙으로 정렬(메인 엑시스)
export const FlexAlignCenter = styled(FlexBox)`
  justify-content: center;
`;
