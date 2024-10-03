import { IconStars } from "@/app/icons/IconStars";

interface OpinionsCardItemProps {
  name: string;
  opinion: string;
}

export const OpinionsCardItem: React.FC<OpinionsCardItemProps> = ({
  name,
  opinion,
}) => {
  return (
    <div className="shadow-card-shadow min-w-[220px] rounded-3xl border bg-cream px-[14px] py-[20px] leading-[1.5]">
      <p className="mb-[10px] border-b font-bold">{name}</p>
      <p className="mb-[24px] max-w-full whitespace-normal text-14">{`“${opinion}”`}</p>
      <IconStars />
    </div>
  );
};
