import TabButton from './TabButton';
import { Heading3 } from '../../../common/Heading/Heading.style';
import { CreateCategoryButton } from './CategoryMenu.style';

const CategoryMenu = () => {
  return (
    <div>
      <div>
        <Heading3>카테고리</Heading3>
        <CreateCategoryButton />
      </div>
      <div>
        <TabButton title="react">React</TabButton>
        <TabButton title="vue">Vue</TabButton>
      </div>
    </div>
  );
};

export default CategoryMenu;
