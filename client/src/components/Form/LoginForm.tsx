import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import InputField from '../common/Input/InputField';

import { Input, Label } from '../common/Input/Input.style';
import { PrimaryButton } from '../common/Button/Button.style';
import { ErrorMessage, Form } from './Form.style';

interface LoginFormData {
  email: string;
  password: string;
}

const INITIAL_DATA = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const [loginData, setLoginData] = useState(INITIAL_DATA);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onChange = (data: Partial<LoginFormData>) => {
    setLoginData((prev) => {
      return { ...prev, ...data };
    });
  };

  const onSubmit: SubmitHandler<LoginFormData> = (data) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputField>
        <Label htmlFor="email">이메일</Label>
        <Input
          autoComplete="off"
          autoFocus
          id="email"
          type="email"
          {...register('email', {
            onChange: (e) => onChange({ email: e.target.value }),
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
          {...register('password', {
            onChange: (e) => onChange({ password: e.target.value }),
            required: '비밀번호를 입력해주세요.',
            minLength: {
              value: 7,
              message: '비밀번호를 확인해주세요.',
            },
          })}
        />
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
      </InputField>
      <PrimaryButton size="lg">로그인</PrimaryButton>
    </Form>
  );
};

export default LoginForm;
