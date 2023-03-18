import { FlexBox } from '../common/Align/AlignStyle';
import { PrimaryButton } from '../common/Button/ButtonStyles';
import {
  ProfileBio,
  ProfileImage,
  ProfileJob,
  ProfileName,
} from './UserProfileStyles';

const UserProfile = () => {
  return (
    <FlexBox col base="center" gap={15}>
      <div>
        <ProfileImage
          src="https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt="사용자 프로필 이미지"
        />
      </div>
      <FlexBox col base="center" gap={5}>
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
