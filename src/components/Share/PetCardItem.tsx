interface PetCardItemProps {
  name: string;
  description: string;
  images: Array<string>;
}

export const PetCardItem: React.FC<PetCardItemProps> = ({
  name,
  description,
  images,
}) => {
  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
      <p>{images}</p>
    </div>
  );
};

export default PetCardItem;
