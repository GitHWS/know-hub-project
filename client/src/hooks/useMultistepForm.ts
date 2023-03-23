import { ReactElement, useState } from 'react';

// steps = [<AccountForm />, <UserForm />, <ProfileForm />];

export const useMultistepForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    setCurrentStepIndex((prevStep) => {
      if (prevStep >= steps.length - 1) return prevStep;
      return prevStep + 1;
    });
  };

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isLastStep: currentStepIndex === steps.length - 1,
    next,
  };
};
