import {
  BetweenAlignedBox,
  BaseFlexBox,
  FlexBoxWithBackground,
} from '../../common/Layout/LayoutStyles';
import { Heading1 } from '../../common/Heading/HeadingStyles';
import { PrimaryButton } from '../../common/Button/ButtonStyles';
import { CategoryDescription } from './PostListStyles';
import PostItem from '../../PostItem/PostItem';

const PostList = () => {
  return (
    <FlexBoxWithBackground
      col
      gap={20}
      bg="black"
      styleProps={{ overflow: 'hidden', padding: '2rem' }}>
      <FlexBoxWithBackground col gap={10} bg="black">
        <BetweenAlignedBox styleProps={{ base: 'center' }}>
          <Heading1>React</Heading1>
          <PrimaryButton size="md">게시물 작성</PrimaryButton>
        </BetweenAlignedBox>
        <CategoryDescription>
          Front-end의 필수 스택! React를 배워봅시다! 🤓
        </CategoryDescription>
      </FlexBoxWithBackground>
      <FlexBoxWithBackground
        col
        gap={10}
        styleProps={{ base: 'center', overflow: 'scroll' }}
        bg="black"
        as="ul">
        <PostItem />
        <PostItem />
        <PostItem />
      </FlexBoxWithBackground>
    </FlexBoxWithBackground>
  );
};

export default PostList;
