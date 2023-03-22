import AccountSideBar from '../Home/Account/AccountSideBar';
import PostList from '../Home/Post/PostList/PostList';

import { HomeLayout } from '../common/Layout/Layout.style';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const TitleInput = styled.input`
  font-size: 3rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid ${theme.colors.common.grey};
  margin-bottom: 2rem;
  background: none;
  color: ${theme.colors.font.white};
  width: 100%;
`;

const Home = () => {
  return (
    <HomeLayout>
      <AccountSideBar />
      <PostList />
      <div
        style={{
          padding: 20,
          flexGrow: 1,
          borderLeft: `1px solid ${theme.colors.common.grey}`,
        }}>
        <TitleInput placeholder="제목을 입력하세요." />
      </div>
    </HomeLayout>
  );
};

export default Home;
