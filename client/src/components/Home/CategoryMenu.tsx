import { FlexAlignBetween, FlexBox } from '../common/Align/AlignStyle';
import { Heading4 } from '../common/Heading/HeadingStyles';
import { CategoryMenuList, CreateCategoryButton } from './CategoryMenuStyles';
import TabButton from '../common/Button/TabButton';
import { SecondaryButton } from '../common/Button/ButtonStyles';

const CategoryMenu = () => {
  return (
    <FlexBox col gap={10}>
      <FlexAlignBetween base="center">
        <Heading4>카테고리</Heading4>
        <CreateCategoryButton />
      </FlexAlignBetween>
      <CategoryMenuList>
        <TabButton title="react">React</TabButton>
        <TabButton title="vue">Vue</TabButton>
      </CategoryMenuList>
      <div>
        <SecondaryButton size="lg">로그아웃</SecondaryButton>
      </div>
    </FlexBox>
  );
};

export default CategoryMenu;
