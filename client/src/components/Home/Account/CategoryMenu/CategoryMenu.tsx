import TabButton from './TabButton';
import { FlexBox } from '../../../common/Layout/Layout.style';
import { Heading3 } from '../../../common/Heading/Heading.style';
import { CreateCategoryButton } from './CategoryMenu.style';

const CategoryMenu = () => {
  return (
    <FlexBox col gap={10}>
      <FlexBox between base="center">
        <Heading3>카테고리</Heading3>
        <CreateCategoryButton />
      </FlexBox>
      <FlexBox col gap={5}>
        <TabButton title="react">React</TabButton>
        <TabButton title="vue">Vue</TabButton>
      </FlexBox>
    </FlexBox>
  );
};

export default CategoryMenu;
