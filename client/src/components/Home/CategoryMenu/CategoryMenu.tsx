import {
  BetweenAlignedBox,
  BaseFlexBox,
} from '../../common/Layout/LayoutStyles';
import { Heading4 } from '../../common/Heading/HeadingStyles';
import { CategoryMenuList, CreateCategoryButton } from './CategoryMenuStyles';
import TabButton from '../../common/Button/TabButton';

const CategoryMenu = () => {
  return (
    <BaseFlexBox col gap={10}>
      <BetweenAlignedBox styleProps={{ base: 'center' }}>
        <Heading4>카테고리</Heading4>
        <CreateCategoryButton />
      </BetweenAlignedBox>
      <CategoryMenuList>
        <TabButton title="react">React</TabButton>
        <TabButton title="vue">Vue</TabButton>
      </CategoryMenuList>
    </BaseFlexBox>
  );
};

export default CategoryMenu;
