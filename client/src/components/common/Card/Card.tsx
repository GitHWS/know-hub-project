import { StyledCard } from './Card.style';

export interface CardProps {
  styles?: React.CSSProperties;
  children: React.ReactNode;
}

const Card = ({ styles, children }: CardProps) => {
  return <StyledCard style={styles}>{children}</StyledCard>;
};

export default Card;
