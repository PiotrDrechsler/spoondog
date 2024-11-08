import { z } from "zod";

const petCardItemSchema = z.object({
  name: z.string(),
  sex: z.string(),
  image: z.string().optional(),
});

interface PetCardItemProps extends z.infer<typeof petCardItemSchema> {}

export const PetCardItem: React.FC<PetCardItemProps> = ({
  name,
  sex,
  image,
}) => {
  return (
    <div>
      <p>{name}</p>
      <p>{sex}</p>
      <p>{image}</p>
    </div>
  );
};

export default PetCardItem;
