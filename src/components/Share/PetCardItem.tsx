import Image from "next/image";
import { z } from "zod";
import Button from "./Button";

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
    <div className="flex max-w-[242px] flex-col items-center rounded-[32px] border p-[16px] shadow-card-shadow tablet:max-w-[275px]">
      <div className="relative h-[159px] w-[167px] desktop:h-[180px] desktop:w-[180px]">
        <Image
          src={image || ""}
          alt={name}
          fill
          className="rounded-[24px] object-cover"
        />
      </div>
      <div className="flex w-full justify-between">
        <p className="text-18 font-bold tablet:text-20">{name}</p>
        <p>{sex}</p>
      </div>
      <Button content="Poznaj historie" href="/" />
    </div>
  );
};

export default PetCardItem;
