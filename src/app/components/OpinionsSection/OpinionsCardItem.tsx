import { IconStars } from "@/app/icons/IconStars";
import { z } from "zod";

// Creating a Zod scheme to validate the number of characters
const opinionSchema = z.object({
  name: z.string(),
  opinion: z.string().max(120, "The opinion shall not exceed 120 signs"),
});

interface OpinionsCardItemProps {
  name: string;
  opinion: string;
}

export const OpinionsCardItem: React.FC<OpinionsCardItemProps> = ({
  name,
  opinion,
}) => {
  // Validation of opinions before rendering the component
  const parsedOpinion = opinionSchema.safeParse({ name, opinion });

  // If validation fails, we can display in console.error the information or shorten the text
  if (!parsedOpinion.success) {
    console.error("The opinion exceeds the number of characters allowed");
    opinion = opinion.slice(0, 120) + "...";
    console.error("Change lenght of opinion for:", opinion);
  }

  return (
    <div className="w-[220px]! my-[8px] h-[206px] rounded-3xl border bg-cream px-[14px] py-[20px] leading-[1.5] shadow-card-shadow desktop:h-[220px] desktop:px-[20px]">
      <p className="mb-[10px] border-b font-bold desktop:text-18">{name}</p>
      <div className="line-clamp-4 max-w-full overflow-hidden duration-7000 ease-linear">
        <p className="whitespace-normal text-14 desktop:text-16">
          &quot;{opinion}&quot;
        </p>
      </div>
      <div className="mt-[24px] flex justify-between">
        <IconStars />
      </div>
    </div>
  );
};
