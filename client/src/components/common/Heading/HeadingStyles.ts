import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';

interface headingProps {
  center?: boolean;
}

const commonHeadingStyle = css<headingProps>`
  font-weight: 900;
  color: ${theme.colors.font.white};
  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `}
`;

export const Heading1 = styled.h1<headingProps>`
  ${commonHeadingStyle}
  font-size: ${theme.font.size.h1};
`;

export const Heading2 = styled.h2<headingProps>`
  ${commonHeadingStyle}
  font-size: ${theme.font.size.h2};
`;

export const Heading3 = styled.h3<headingProps>`
  ${commonHeadingStyle}
  font-size: ${theme.font.size.h3};
`;

// 가장 작은 폰트 사이즈
export const Heading4 = styled.h4<headingProps>`
  ${commonHeadingStyle}
  font-size: ${theme.font.size.h4};
  color: ${theme.colors.font.lightGrey};
`;
