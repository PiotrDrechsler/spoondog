import { z } from "zod";

const petCardItemSchema = z.object({
  name: z.string(),
  description: z.string(),
  sex: z.string(),
  image: z.string().url(),
  href: z.string().url(),
});

interface PetCardItemProps extends z.infer<typeof petCardItemSchema> {}

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
