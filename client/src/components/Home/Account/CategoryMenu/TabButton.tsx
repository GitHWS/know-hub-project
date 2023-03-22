import { useState } from 'react';
import { TabButtonStyles } from './TabButton.style';

interface TabButtonProps {
  title: string;
  children: React.ReactNode;
}

const TabButton = ({ children, title }: TabButtonProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const isSelectedHandler = () => {
    setIsSelected((prev) => !prev);
  };

  return (
    <TabButtonStyles
      title={title}
      isSelected={isSelected}
      onClick={isSelectedHandler}>
      <span>{children}</span>
    </TabButtonStyles>
  );
};

export default TabButton;
