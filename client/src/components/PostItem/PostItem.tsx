import Card from '../common/Card/Card';
import {
  PostContent,
  PostContentBox,
  PostDate,
  PostIconBox,
  PostIconButton,
  PostThumbnail,
  PostTitle,
} from './PostItemStyles';

const PostItem = () => {
  return (
    <Card>
      <PostContentBox align="col" baseline="start">
        <PostContentBox align="row" baseline="end">
          <PostTitle>Post Title</PostTitle>
          <PostDate>2023.03.02</PostDate>
        </PostContentBox>
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
      </PostContentBox>
      <PostThumbnail />
    </Card>
  );
};

export default PostItem;
