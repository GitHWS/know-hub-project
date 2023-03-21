import { BetweenAlignedBox, BaseFlexBox } from '../common/Layout/LayoutStyles';
import Card from '../common/Card/Card';
import {
  PostContent,
  PostDate,
  PostIconBox,
  PostIconButton,
  PostThumbnail,
  PostTitle,
} from './PostItemStyles';

const PostItem = () => {
  return (
    <Card>
      <BetweenAlignedBox col>
        <BaseFlexBox gap={5} styleProps={{ base: 'end' }}>
          <PostTitle>Post Title</PostTitle>
          <PostDate>2023.03.02</PostDate>
        </BaseFlexBox>
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
      </BetweenAlignedBox>
      <PostThumbnail />
    </Card>
  );
};

export default PostItem;
