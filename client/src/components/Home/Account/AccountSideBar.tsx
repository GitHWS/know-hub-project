import UserProfile from './UserProfile/UserProfile';
import CategoryMenu from './CategoryMenu/CategoryMenu';

import { FlexBox } from '../../common/Layout/Layout.style';
import { SecondaryButton } from '../../common/Button/Button.style';

const AccountSideBar = () => {
  return (
    <FlexBox col between styleProps={{ padding: 20, bg: true }}>
      <UserProfile />
      <CategoryMenu />
      <SecondaryButton size="lg">로그아웃</SecondaryButton>
    </FlexBox>
  );
};

export default AccountSideBar;
