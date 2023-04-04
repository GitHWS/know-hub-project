import { FlexContainerAlign } from '../../../common/Layout/Layout.style';
import { PostContent, PostDate, PostTitle } from './PostItem.style';
import PostItemButtons from './PostItemButtons';

const PostItemContent = () => {
  return (
    <FlexContainerAlign justifyContent="space-between" col gap={0.5}>
      <FlexContainerAlign alignItems="baseline" gap={0.5}>
        <PostTitle>TITLE</PostTitle>
        <PostDate>0000.00.00</PostDate>
      </FlexContainerAlign>
      <PostContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        ducimus temporibus impedit fugit perspiciatis laudantium unde illo nemo
        reprehenderit eos beatae quidem, ex nobis, totam asperiores eveniet
        ipsum quos! Deleniti!
      </PostContent>
      <PostItemButtons />
    </FlexContainerAlign>
  );
};

export default PostItemContent;
