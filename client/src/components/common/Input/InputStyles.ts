import styled, { css } from 'styled-components';

import { theme } from '../../../styles/theme';

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.label`
  font-size: 1.5rem;
  color: ${theme.colors.font.lightGrey};
`;

const commonInputStyle = css`
  width: 100%;
  border: 2px solid ${theme.colors.font.lightGrey};
  border-radius: 10px;
  font-size: 1.8rem;
  color: ${theme.colors.font.white};
  background-color: ${theme.colors.common.grey};
`;

export const Input = styled.input`
  ${commonInputStyle}
  padding: 10px 5px;
`;

export const Textarea = styled.textarea`
  ${commonInputStyle}
  padding: 10px;
`;
