import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import sideImage from '../../assets/images/bg-side_image.jpg';
import { theme } from '../../styles/theme';

interface LoginSideProp {
  bg?: boolean;
}

export const GridLayout = styled.main`
  min-width: 50vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${theme.colors.grey};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
`;

export const LoginSideBox = styled.div<LoginSideProp>`
  display: flex;
  flex-direction: column;
  gap: 40px;

  padding: 150px 50px;

  ${({ bg }) =>
    bg &&
    css`
      background-image: url(${sideImage});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    `}
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SignupText = styled.p`
  text-align: center;
  font-size: 1.6rem;
  color: ${theme.colors.white};
`;

export const SignupLink = styled(Link)`
  margin-left: 5px;
  font-weight: 900;
  transition: all 0.2s;

  &:hover,
  &:active {
    color: ${theme.colors.primary};
  }
`;
