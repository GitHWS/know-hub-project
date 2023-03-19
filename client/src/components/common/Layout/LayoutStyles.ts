import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';
import sideImage from '../../../assets/images/bg-side_image.jpg';

export interface FlexBoxProps {
  // 레이아웃
  padding?: string;
  col?: boolean;
  overflow?: 'hidden' | 'scroll';
  base?: 'start' | 'center' | 'end';
  gap?: number;

  // 스타일
  bg?: 'image' | 'black';
}

export const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  flex-direction: ${({ col }) => (col ? 'column' : 'row')};
  gap: ${({ gap }) => `${gap}px`};
  padding: ${({ padding }) => padding ?? '0'};
  overflow: ${({ overflow }) =>
    overflow && overflow === 'hidden' ? 'hidden' : 'auto'};

  ${({ overflow }) => {
    switch (overflow) {
      case 'hidden':
        return css`
          overflow: hidden;
        `;
      case 'scroll':
        return css`
          overflow: scroll;
        `;
      default:
        return css`
          overflow: initial;
        `;
    }
  }}

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
    }
  }}

  // 스타일
  ${({ bg }) => {
    switch (bg) {
      case 'image':
        return css`
          background-image: url(${sideImage});
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
        `;
      case 'black':
        return css`
          background-color: ${theme.colors.black};
        `;
      default:
        return css`
          background-color: ${theme.colors.grey};
        `;
    }
  }}
`;

// FlexBox 내 첫 요소와 마지막 요소를 양쪽 끝으로 정렬하고 사이에 위치한 요소는 일정한 간격으로 정렬(메인 엑시스)
export const FlexAlignBetween = styled(FlexBox)`
  justify-content: space-between;
`;

// FlexBox 내 요소를 정중앙으로 정렬(메인 엑시스)
export const FlexAlignCenter = styled(FlexBox)`
  justify-content: center;
`;

export const CenterGridLayout = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
`;

export const MainGridLayout = styled.div`
  display: grid;
  grid-template-columns: 300px 2fr 1.5fr;
  gap: 2rem;
  height: 100vh;
`;
