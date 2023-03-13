import { CardStyles } from './CardStyles';

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return <CardStyles>{children}</CardStyles>;
};

export default Card;
