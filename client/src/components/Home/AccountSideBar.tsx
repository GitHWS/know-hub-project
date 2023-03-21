import { BetweenAlignedBox } from '../common/Layout/LayoutStyles';
import { SecondaryButton } from '../common/Button/ButtonStyles';
import CategoryMenu from './CategoryMenu/CategoryMenu';
import UserProfile from './UserProfile/UserProfile';

const AccountSideBar = () => {
  return (
    <BetweenAlignedBox col styleProps={{ padding: '3rem 2rem' }}>
      <UserProfile />
      <CategoryMenu />
      <SecondaryButton size="lg">로그아웃</SecondaryButton>
    </BetweenAlignedBox>
  );
};

export default AccountSideBar;
