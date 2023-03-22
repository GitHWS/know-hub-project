import { FlexBox } from '../../../common/Layout/Layout.style';
import { PrimaryButton } from '../../../common/Button/Button.style';
import {
  ProfileBio,
  ProfileImage,
  ProfileJob,
  ProfileName,
} from './UserProfile.style';

const UserProfile = () => {
  return (
    <FlexBox col gap={15} base="center">
      <div>
        <ProfileImage
          src="https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt="사용자 프로필 이미지"
        />
      </div>
      <FlexBox col gap={5} base="center">
        <ProfileName>사용자</ProfileName>
        <ProfileJob>직업</ProfileJob>
      </FlexBox>
      <ProfileBio>
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.
      </ProfileBio>
      <PrimaryButton size="sm">프로필 수정</PrimaryButton>
    </FlexBox>
  );
};

export default UserProfile;
