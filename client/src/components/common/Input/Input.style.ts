import styled, { css } from 'styled-components';

import { theme } from '../../../styles/theme';

export const Label = styled.label`
  font-size: 1.5rem;
  color: ${theme.colors.font.lightGrey};
`;

const commonInputStyle = css`
  padding: 1.5rem 1rem;
  width: 100%;
  border-radius: 1rem;
  border: 2px solid ${theme.colors.font.lightGrey};
  color: ${theme.colors.font.white};
  background-color: ${theme.colors.common.grey};
  font-size: 1.6rem;
`;

export const Input = styled.input`
  ${commonInputStyle}
`;

export const Textarea = styled.textarea`
  ${commonInputStyle}
  height: 10rem;
`;
