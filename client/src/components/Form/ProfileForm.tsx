import { useFormContext } from 'react-hook-form';

import InputField from '../common/Input/InputField';

import { Input, Label } from '../common/Input/Input.style';
import { ErrorMessage } from './Form.style';

type ProfileData = {
  job: string;
  profile: File | null;
};

type ProfileFormProps = ProfileData & {
  updateFields: (field: Partial<ProfileData>) => void;
};

const ProfileForm = ({ job, updateFields }: ProfileFormProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProfileFormProps>();

  return (
    <>
      <InputField>
        <Label htmlFor="job">직업</Label>
        <Input
          autoComplete="off"
          autoFocus
          id="job"
          type="text"
          value={job}
          {...register('job', {
            onChange: (e) => {
              updateFields({ job: e.target.value });
            },
            required: '현재 근무 중인 분야를 입력해주세요.',
          })}
        />
        {errors.job && <ErrorMessage>{errors.job.message}</ErrorMessage>}
      </InputField>
      <InputField>
        <Label htmlFor="profile">프로필 이미지</Label>
        <Input
          id="profile"
          type="file"
          {...register('profile', {
            onChange: (e) => {
              updateFields({ profile: e.target.value });
            },
            required: '프로필 이미지를 업로드해주세요.',
          })}
        />
        {errors.profile && (
          <ErrorMessage>{errors.profile.message}</ErrorMessage>
        )}
      </InputField>
    </>
  );
};

export default ProfileForm;
