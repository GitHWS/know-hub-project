import styled, { css } from 'styled-components';
import theme from '../../../styles/theme';

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

type JustifyContentValue =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'initial'
  | 'inherit';

type AlignItemsValue =
  | 'normal'
  | 'stretch'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'initial'
  | 'inherit';

interface FlexContainerProps {
  col?: boolean;
  gap?: number;
}

interface FlexContainerAlignProps extends FlexContainerProps {
  justifyContent?: JustifyContentValue;
  alignItems?: AlignItemsValue;
}

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  flex-direction: ${({ col }) => (col ? 'column' : 'row')};
  gap: ${({ gap }) => gap && `${gap}rem`};
`;

export const FlexContainerAlign = styled(
  FlexContainer
)<FlexContainerAlignProps>`
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
`;

FlexContainerAlign.defaultProps = {
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
};

export const CenterGridLayout = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
`;

export const HomeLayout = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 2fr;
  grid-template-rows: 100vh;
`;
