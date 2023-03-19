import { Heading3 } from '../common/Heading/HeadingStyles';
import CategoryMenu from './CategoryMenu/CategoryMenu';
import UserProfile from './UserProfile/UserProfile';

const AccountSideBar = () => {
  return (
    <>
      <UserProfile />
      <CategoryMenu />
    </>
  );
};

export default AccountSideBar;
