import styled, { css } from 'styled-components';

import { theme } from '../../styles/theme';

import iconLike from '../../assets/images/icon_like.svg';
import iconPostMenu from '../../assets/images/icon_post_menu.svg';
import thumbnail from '../.././assets/images/thumbnail.png';

interface PostIconButtonProps {
  buttonType: 'like' | undefined;
}

interface PostContentBoxProps {
  align: 'row' | 'col';
  baseline: 'start' | 'end';
}

export const PostContentBox = styled.div<PostContentBoxProps>`
  display: flex;
  ${({ align }) =>
    align === 'row'
      ? css`
          flex-direction: row;
        `
      : css`
          flex-direction: column;
        `};
  ${({ baseline }) =>
    baseline === 'start'
      ? css`
          align-items: flex-start;
        `
      : css`
          align-items: flex-end;
        `};
  gap: 10px;
`;

export const PostDate = styled.span`
  font-size: 1.2rem;
  color: ${theme.colors.lightGrey};
`;

export const PostTitle = styled.h3`
  font-size: 2.8rem;
  font-weight: bold;
  color: ${theme.colors.white};
`;

export const PostContent = styled.p`
  max-width: 590px;

  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  font-size: 1.4rem;
  color: ${theme.colors.lightGrey};
`;

export const PostIconBox = styled.div`
  display: flex;
  gap: 5px;
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

export const PostThumbnail = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 5px;
  // 사용자의 입력 데이터로 적용할 예정
  background-image: url(${thumbnail});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
