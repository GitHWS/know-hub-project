import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';

interface headingProps {
  center?: boolean;
}

const commonHeadingStyle = css<headingProps>`
  font-weight: ${theme.font.weight.bold};
  color: ${theme.colors.font.white};
  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `}
`;

export const Heading1 = styled.h1<headingProps>`
  ${commonHeadingStyle}
  font-size: ${theme.font.size.lg};
`;

export const Heading2 = styled.h2<headingProps>`
  ${commonHeadingStyle}
  font-size: ${theme.font.size.md};
`;

export const Heading3 = styled.h3<headingProps>`
  ${commonHeadingStyle}
  font-size: ${theme.font.size.sm};
  color: ${theme.colors.font.lightGrey};
`;
