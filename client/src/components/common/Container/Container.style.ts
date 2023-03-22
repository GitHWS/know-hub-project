import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';

import { Variant } from './Container';

import containerImage from '../../../assets/images/bg-side_image.jpg';

interface ContainerProps {
  variant: Variant;
  bg?: boolean;
}

export const StyledContainer = styled.div<ContainerProps>`
  background-color: ${theme.colors.common.grey};

  ${({ variant }) =>
    variant === 'form'
      ? css`
          padding: 10rem 5rem;
          width: 25vw;
        `
      : css`
          ${theme.layout.flex.row};
          padding: 2rem;
          border-radius: 0.5rem;
        `}
`;

export const ContainerWithBackground = styled(StyledContainer)`
  ${({ bg }) =>
    bg &&
    css`
      background-image: url(${containerImage});
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    `}
`;
