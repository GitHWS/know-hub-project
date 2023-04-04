import styled, { css } from 'styled-components';

import theme from '../../../../styles/theme';

import iconLike from '../../../../assets/images/icon_like.svg';
import iconPostMenu from '../../../../assets/images/icon_post_menu.svg';

interface PostIconButtonProps {
  buttonType: 'like' | undefined;
}

export const PostTitle = styled.h3`
  font-size: 2.2rem;
`;

export const PostDate = styled.span`
  font-size: 1rem;
  color: ${theme.colors.lightGrey};
`;

export const PostContent = styled.p`
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 1.3;

  font-size: 1.4rem;
  color: ${theme.colors.lightGrey};
`;

export const PostIconButton = styled.button<PostIconButtonProps>`
  width: 24px;
  height: 24px;
  background-color: transparent;

  ${({ buttonType }) =>
    buttonType === 'like'
      ? css`
          background-image: url(${iconLike});
        `
      : css`
          background-image: url(${iconPostMenu});
        `}
`;

export const PostThumbnail = styled.img`
  width: 12rem;
  height: 12rem;
  border-radius: 0.3rem;
`;
