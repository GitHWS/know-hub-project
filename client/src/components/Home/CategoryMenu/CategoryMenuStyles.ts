import styled, { keyframes } from 'styled-components';
import iconCreate from '../../../assets/images/icon_create.svg';

const rotateAni = keyframes`
  from{
    transform: rotate(0);
  }
  to{
    transform: rotate(45deg);
  }
`;

export const CategoryMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CreateCategoryButton = styled.button`
  width: 24px;
  height: 24px;
  transition: transform 0.1s ease-in-out;

  &::before {
    display: inline-block;
    content: '';
    width: 100%;
    height: 100%;
    background-image: url(${iconCreate});
  }

  &:hover {
    &::before {
      animation: ${rotateAni} 0.1s ease-in-out forwards;
    }
  }
`;
