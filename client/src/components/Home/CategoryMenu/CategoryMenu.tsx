import { FlexAlignBetween, FlexBox } from '../../common/Layout/LayoutStyles';
import { Heading4 } from '../../common/Heading/HeadingStyles';
import { CategoryMenuList, CreateCategoryButton } from './CategoryMenuStyles';
import TabButton from '../../common/Button/TabButton';

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
    </FlexBox>
  );
};

export default CategoryMenu;
