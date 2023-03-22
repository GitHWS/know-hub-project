import PostItem from '../PostItem/PostItem';
import { Heading1 } from '../../../common/Heading/Heading.style';
import { FlexBox } from '../../../common/Layout/Layout.style';
import { CategoryDescription } from './PostList.style';

const PostList = () => {
  return (
    <FlexBox col gap={20} styleProps={{ padding: 20 }}>
      <Heading1>React</Heading1>
      <CategoryDescription>
        Front-end의 필수 스택! React를 배워봅시다! 🤓
      </CategoryDescription>
      <FlexBox
        col
        gap={10}
        styleProps={{ overflow: 'scroll', padding: 10 }}
        as="ul">
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </FlexBox>
    </FlexBox>
  );
};

export default PostList;
