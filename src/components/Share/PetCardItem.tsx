import Image from "next/image";
import { z } from "zod";
import Button from "./Button";
import { IconPetGender } from "@/icons/IconPetGender";

const petCardItemSchema = z.object({
  name: z.string(),
  gender: z.string(),
  image: z.string().optional(),
});

interface PetCardItemProps extends z.infer<typeof petCardItemSchema> {}

export const PetCardItem: React.FC<PetCardItemProps> = ({
  name,
  gender,
  image,
}) => {
  return (
    <div className="flex max-w-[242px] flex-col items-center rounded-[32px] border px-[16px] py-[24px] leading-[1.5] shadow-card-shadow tablet:max-w-[275px] tablet:py-[32px] desktop:px-[32px] desktop:py-[24px]">
      <div className="relative h-[159px] w-[167px] desktop:h-[180px] desktop:w-[180px]">
        <Image
          src={image || ""}
          alt={name}
          fill
          className="rounded-[24px] object-cover"
        />
      </div>
      <div className="my-[16px] flex w-full justify-between">
        <p className="text-18 font-bold tablet:text-20">{name}</p>
        <div
          className={`${
            gender === "female" ? "fill-[#F576E0]" : "fill-[#80CAFF]"
          } stroke-black`}
        >
          <IconPetGender className="size-[26px]" />
        </div>
      </div>
      <Button content="Poznaj historie" href="/" />
    </div>
  );
};

export default PetCardItem;
