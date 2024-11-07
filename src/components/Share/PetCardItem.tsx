interface PetCardItemProps {
  name: string;
  description: string;
  sex: string;
  images: Array<string>;
  href: string;
}

export const PetCardItem: React.FC<PetCardItemProps> = ({
  name,
  description,
  sex,
  images,
  href,
}) => {
  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
      <p>{sex}</p>
      <p>{images}</p>
      <p>{href}</p>
    </div>
  );
};

export default PetCardItem;
