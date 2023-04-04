import Card from '../../../common/Card/Card';
import PostItemContent from './PostItemContent';

import { FlexContainerAlign } from '../../../common/Layout/Layout.style';
import { PostThumbnail } from './PostItem.style';

const PostItem = () => {
  return (
    <Card
      styles={{
        backgroundColor: '#262626',
        padding: '1.5rem',
      }}>
      <FlexContainerAlign
        justifyContent="space-between"
        alignItems="center"
        gap={1}>
        <PostItemContent />
        <PostThumbnail
          src="https://images.unsplash.com/photo-1680000827819-c4bb72ed594d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          alt="게시물 이미지"
        />
      </FlexContainerAlign>
    </Card>
  );
};

export default PostItem;
