import styled from 'styled-components';
import theme from '../../../../styles/theme';

export const ProfileImage = styled.img`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
`;

export const ProfileName = styled.span`
  color: ${theme.colors.white};
  font-size: 1.8rem;
  font-weight: 900;
`;

export const ProfileJob = styled.span`
  color: ${theme.colors.lightGrey};
  font-size: 1.2rem;
`;

export const ProfileBio = styled.p`
  color: ${theme.colors.white};
  font-size: 1.4rem;
  text-align: center;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;
