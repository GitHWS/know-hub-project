import { Heading3 } from '../common/Heading/HeadingStyles';
import CategoryMenu from './CategoryMenu';
import UserProfile from './UserProfile';

const AccountSideBar = () => {
  return (
    <>
      <UserProfile />
      <CategoryMenu />
    </>
  );
};

export default AccountSideBar;
