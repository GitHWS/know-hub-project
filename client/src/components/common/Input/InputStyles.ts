import styled from 'styled-components';

import { theme } from '../../../styles/theme';

export const InputFieldStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const InputLabelStyle = styled.label`
  font-size: 2rem;
  color: ${theme.colors.white};
`;

export const InputStyle = styled.input`
  padding: 20px 10px;
  color: ${theme.colors.white};
  border: 2px solid ${theme.colors.lightGrey};
  border-radius: 10px;
  background-color: ${theme.colors.grey};
  font-size: 2rem;
`;
