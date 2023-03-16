import styled, { css } from 'styled-components';

import { theme } from '../../../styles/theme';

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.label`
  font-size: 2rem;
  color: ${theme.colors.white};
`;

const commonInputStyle = css`
  width: 100%;
  border: 2px solid ${theme.colors.lightGrey};
  border-radius: 10px;
  font-size: 2rem;
  color: ${theme.colors.white};
  background-color: ${theme.colors.grey};
`;

export const Input = styled.input`
  ${commonInputStyle}
  padding: 20px 10px;
`;

export const Textarea = styled.textarea`
  ${commonInputStyle}
  padding: 15px;
`;
