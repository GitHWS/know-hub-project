import { FormProvider, useForm } from 'react-hook-form';
import { useMultistepForm } from '../../hooks/useMultistepForm';

import AccountForm from './AccountForm';
import ProfileForm from './ProfileForm';
import UserForm from './UserForm';

import { Form } from './Form.style';
import { PrimaryButton } from '../common/Button/Button.style';
import { useState } from 'react';

type SignupFormData = {
  email: string;
  password: string;
  name: string;
  bio: string;
  job: string;
  profile: File | null;
};

const INITIAL_DATA: SignupFormData = {
  email: '',
  password: '',
  name: '',
  bio: '',
  job: '',
  profile: null,
};

const SignupForm = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const methods = useForm();

  const updateFields = (fields: Partial<SignupFormData>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const { step, isLastStep, next } = useMultistepForm([
    // 각 step마다 회원가입 폼 컴포넌트
    <AccountForm {...data} updateFields={updateFields} />,
    <UserForm {...data} updateFields={updateFields} />,
    <ProfileForm {...data} updateFields={updateFields} />,
  ]);

  const onSubmit = () => {
    if (!isLastStep) return next();
    alert('회원가입 완료');
  };

  console.log(data);

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        {step}
        <PrimaryButton size="lg">
          {isLastStep ? '회원가입' : '다음'}
        </PrimaryButton>
      </Form>
    </FormProvider>
  );
};

export default SignupForm;
