import styled from 'styled-components';
import { CardProps } from './Card';

export const StyledCard = styled.div<CardProps>`
  border-radius: 1rem;

  ${({ styles }) => styles && { ...styles }}
`;
