import Image from "next/image";
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
    <div className="max-w-[242px] rounded-[32px] border shadow-card-shadow">
      <Image src={image || ""} alt={name} width={167} height={167} />
      <p>{name}</p>
      <p>{sex}</p>
    </div>
  );
};

export default PetCardItem;
