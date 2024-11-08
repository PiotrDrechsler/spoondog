interface PetCardItemProps {
  name: string;
  description: string;
  sex: string;
  image: string;
  href: string;
}

export const PetCardItem: React.FC<PetCardItemProps> = ({
  name,
  description,
  sex,
  image,
  href,
}) => {
  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
      <p>{sex}</p>
      <p>{image}</p>
      <p>{href}</p>
    </div>
  );
};

export default PetCardItem;
