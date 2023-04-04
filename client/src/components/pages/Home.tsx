import AccountSideBar from '../Home/Account/AccountSideBar';
import PostList from '../Home/Post/PostList/PostList';
import MarkdownEditor from '../Home/Editor/MarkdownEditor';

import { HomeLayout } from '../common/Layout/Layout.style';

const Home = () => {
  return (
    <HomeLayout>
      <AccountSideBar />
      <PostList />
      <MarkdownEditor />
    </HomeLayout>
  );
};

export default Home;
