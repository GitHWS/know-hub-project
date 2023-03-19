import { FlexAlignBetween, FlexBox } from '../../common/Layout/LayoutStyles';
import { Heading1 } from '../../common/Heading/HeadingStyles';
import { PrimaryButton } from '../../common/Button/ButtonStyles';
import { CategoryDescription } from './PostListStyles';
import PostItem from '../../PostItem/PostItem';

const PostList = () => {
  return (
    <FlexBox col gap={20} bg="black" overflow="hidden" padding="2rem">
      <FlexBox col gap={10} bg="black">
        <FlexAlignBetween bg="black" base="center">
          <Heading1>React</Heading1>
          <PrimaryButton size="md">게시물 작성</PrimaryButton>
        </FlexAlignBetween>
        <CategoryDescription>
          Front-end의 필수 스택! React를 배워봅시다! 🤓
        </CategoryDescription>
      </FlexBox>
      <FlexBox col gap={10} base="center" bg="black" overflow="scroll" as="ul">
        <PostItem />
        <PostItem />
        <PostItem />
      </FlexBox>
    </FlexBox>
  );
};

export default PostList;
