import PostItem from '../PostItem/PostItem';
import { Heading1 } from '../../../common/Heading/Heading.style';
import { CategoryDescription } from './PostList.style';

const PostList = () => {
  return (
    <div>
      <Heading1>React</Heading1>
      <CategoryDescription>
        Front-end의 필수 스택! React를 배워봅시다! 🤓
      </CategoryDescription>
      <div>
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </div>
  );
};

export default PostList;
