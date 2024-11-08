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
      <div className="relative h-[159px] w-[167px] tablet:h-[190px] tablet:w-[180px]">
        <Image
          src={image || ""}
          alt={name}
          fill
          className="rounded-[24px] object-cover"
        />
      </div>
      <p>{name}</p>
      <p>{sex}</p>
    </div>
  );
};

export default PetCardItem;
