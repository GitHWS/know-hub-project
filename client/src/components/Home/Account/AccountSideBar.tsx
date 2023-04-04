import UserProfile from './UserProfile/UserProfile';
import CategoryMenu from './CategoryMenu/CategoryMenu';

import { SecondaryButton } from '../../common/Button/Button.style';

const AccountSideBar = () => {
  return (
    <div>
      <UserProfile />
      <CategoryMenu />
      <SecondaryButton size="lg">로그아웃</SecondaryButton>
    </div>
  );
};

export default AccountSideBar;
