import PostList from '../components/Home/PostList/PostList';
import AccountSideBar from '../components/Home/AccountSideBar';

import { MainGridLayout } from '../components/common/Layout/LayoutStyles';

const Home = () => {
  return (
    <MainGridLayout>
      <AccountSideBar />
      <div>Editor</div>
      <PostList />
    </MainGridLayout>
  );
};

export default Home;
