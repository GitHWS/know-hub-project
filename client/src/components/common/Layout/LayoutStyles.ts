import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';
import sideImage from '../../../assets/images/bg-side_image.jpg';

export interface FlexBoxProps {
  styleProps?: {
    padding?: string;
    overflow?: 'hidden' | 'scroll';
    base?: 'start' | 'center' | 'end';
  };
  col?: boolean;
  gap?: number;
}

export interface FlexBoxWithBackground extends FlexBoxProps {
  bg?: 'image' | 'black';
}

export const BaseFlexBox = styled.div<FlexBoxProps>`
  display: flex;
  flex-direction: ${({ col }) => (col ? 'column' : 'row')};
  gap: ${({ gap }) => `${gap}px`};
  padding: ${({ styleProps }) => styleProps?.padding ?? '0'};

  ${({ styleProps }) => {
    switch (styleProps?.overflow) {
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

  ${({ styleProps }) => {
    switch (styleProps?.base) {
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
`;

export const FlexBoxWithBackground = styled(BaseFlexBox)<FlexBoxWithBackground>`
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
          background-color: ${theme.colors.common.black};
        `;
      default:
        return css`
          background-color: ${theme.colors.common.grey};
        `;
    }
  }}
`;

export const CenterAlignedBox = styled(BaseFlexBox)`
  justify-content: center;
`;

export const BetweenAlignedBox = styled(BaseFlexBox)`
  justify-content: space-between;
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
