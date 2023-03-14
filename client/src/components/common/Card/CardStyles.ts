import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const CardStyles = styled.div`
  display: flex;
  padding: 20px;
  border-radius: 5px;
  background: ${theme.colors.grey};
  gap: 10px;
  width: fit-content;
`;
