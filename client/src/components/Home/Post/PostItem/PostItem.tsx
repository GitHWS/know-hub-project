import Container from '../../../common/Container/Container';
import { FlexBox } from '../../../common/Layout/Layout.style';
import {
  PostContent,
  PostDate,
  PostIconBox,
  PostIconButton,
  PostThumbnail,
  PostTitle,
} from './PostItem.style';

const PostItem = () => {
  return (
    <Container variant="post">
      <FlexBox col between>
        <FlexBox gap={5} base="end">
          <PostTitle>Post Title</PostTitle>
          <PostDate>2023.03.02</PostDate>
        </FlexBox>
        <PostContent>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
          velit commodi nulla nobis nihil, temporibus aspernatur. Quaerat animi
          mollitia, tempora voluptates dolore quam corporis! Amet qui accusamus
          soluta commodi consequatur. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing
          elit.
        </PostContent>
        <PostIconBox>
          <PostIconButton buttonType="like" />
          <PostIconButton buttonType={undefined} />
        </PostIconBox>
      </FlexBox>
      <PostThumbnail />
    </Container>
  );
};

export default PostItem;