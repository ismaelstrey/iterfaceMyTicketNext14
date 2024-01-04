interface CardMainProps {
  description: string;
  className?: string;
}

const CardMain = ({ description, className }: CardMainProps) => {
  return <div className={`md:flex mx-3 ${className}`}>{description}</div>;
};

export default CardMain;
