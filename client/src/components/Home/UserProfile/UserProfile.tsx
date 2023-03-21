import { BaseFlexBox } from '../../common/Layout/LayoutStyles';
import { PrimaryButton } from '../../common/Button/ButtonStyles';
import {
  ProfileBio,
  ProfileImage,
  ProfileJob,
  ProfileName,
} from './UserProfileStyles';

const UserProfile = () => {
  return (
    <BaseFlexBox col gap={15} styleProps={{ base: 'center' }}>
      <div>
        <ProfileImage
          src="https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt="사용자 프로필 이미지"
        />
      </div>
      <BaseFlexBox col gap={5} styleProps={{ base: 'center' }}>
        <ProfileName>사용자</ProfileName>
        <ProfileJob>직업</ProfileJob>
      </BaseFlexBox>
      <ProfileBio>
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.
      </ProfileBio>
      <PrimaryButton size="sm">프로필 수정</PrimaryButton>
    </BaseFlexBox>
  );
};

export default UserProfile;
