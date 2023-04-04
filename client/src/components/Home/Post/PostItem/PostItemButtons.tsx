import { FlexContainer } from '../../../common/Layout/Layout.style';
import { PostIconButton } from './PostItem.style';

const PostItemButtons = () => {
  return (
    <FlexContainer gap={1}>
      <PostIconButton buttonType="like" />
      <PostIconButton buttonType={undefined} />
    </FlexContainer>
  );
};

export default PostItemButtons;
