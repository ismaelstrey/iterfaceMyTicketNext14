interface CardMainProps {
  description: string;
}

const CardMain = ({ description }: CardMainProps) => {
  return <div className="flex mx-3">{description}</div>;
};

export default CardMain;
