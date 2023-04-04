import { useFormContext } from 'react-hook-form';

import InputField from '../common/Input/InputField';
import { Input, Label } from '../common/Input/Input.style';
import { ErrorMessage } from './Form.style';

type AccountData = {
  email: string;
  password: string;
};

type AccountFormProps = AccountData & {
  updateFields: (field: Partial<AccountData>) => void;
};

const AccountForm = ({ email, password, updateFields }: AccountFormProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<AccountFormProps>();

  return (
    <>
      <InputField>
        <Label htmlFor="email">이메일</Label>
        <Input
          autoComplete="off"
          autoFocus
          id="email"
          type="email"
          value={email}
          placeholder="example@example.com"
          {...register('email', {
            onChange: (e) => {
              updateFields({ email: e.target.value });
            },
            required: '이메일을 입력해주세요.',
            pattern: {
              value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: '이메일 형식에 맞춰 입력해주세요.',
            },
          })}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </InputField>
      <InputField>
        <Label htmlFor="password">비밀번호</Label>
        <Input
          id="password"
          type="password"
          value={password}
          placeholder="*******"
          {...register('password', {
            onChange: (e) => {
              updateFields({ password: e.target.value });
            },
            required: '비밀번호를 입력해주세요.',
            minLength: {
              value: 7,
              message: '최소 7자 이상을 입력해주세요.',
            },
          })}
        />
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
      </InputField>
    </>
  );
};

export default AccountForm;
