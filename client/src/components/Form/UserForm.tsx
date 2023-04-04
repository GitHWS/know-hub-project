import { useFormContext } from 'react-hook-form';

import InputField from '../common/Input/InputField';

import { Input, Label, Textarea } from '../common/Input/Input.style';
import { ErrorMessage } from './Form.style';

type UserData = {
  name: string;
  bio: string;
};

type UserFormProps = UserData & {
  updateFields: (field: Partial<UserData>) => void;
};

const UserForm = ({ name, bio, updateFields }: UserFormProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserFormProps>();

  return (
    <>
      <InputField>
        <Label htmlFor="name">이름</Label>
        <Input
          autoComplete="off"
          autoFocus
          id="name"
          type="text"
          value={name}
          placeholder="홍길동"
          {...register('name', {
            onChange: (e) => {
              updateFields({ name: e.target.value });
            },
            required: '이름을 입력해주세요.',
            min: 2,
          })}
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      </InputField>
      <InputField>
        <Label htmlFor="bio">소개글</Label>
        <Textarea
          autoComplete="off"
          id="bio"
          value={bio}
          placeholder="간단한 소개글을 남겨보세요!"
          {...register('bio', {
            onChange: (e) => {
              updateFields({ bio: e.target.value });
            },
            required: '최소 5자의 소개글을 입력해주세요.',
            maxLength: 30,
          })}
        />
        {errors.bio && <ErrorMessage>{errors.bio.message}</ErrorMessage>}
      </InputField>
    </>
  );
};

export default UserForm;
