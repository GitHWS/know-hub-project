import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';

interface headingProps {
  center?: boolean;
}

const commonHeadingStyle = css<headingProps>`
  font-weight: 900;
  color: ${theme.colors.white};
  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `}
`;

export const Heading1 = styled.h1<headingProps>`
  ${commonHeadingStyle}
  font-size: 6rem;
`;

export const Heading2 = styled.h2<headingProps>`
  ${commonHeadingStyle}
  font-size: 3rem;
`;

export const Heading3 = styled.h3<headingProps>`
  ${commonHeadingStyle}
  font-size: 2.8rem;
`;

// 가장 작은 폰트 사이즈
export const Heading4 = styled.h4<headingProps>`
  ${commonHeadingStyle}
  font-size: 1.4rem;
  color: ${theme.colors.lightGrey};
`;
