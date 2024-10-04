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
    <div className="w-[220px]! my-[8px] h-[206px] rounded-3xl border bg-cream px-[14px] py-[20px] leading-[1.5] shadow-card-shadow">
      <p className="mb-[10px] border-b font-bold">{name}</p>
      <div className="line-clamp-4 max-w-full overflow-hidden duration-7000 ease-linear">
        <p className="whitespace-normal text-14">&quot;{opinion}&quot;</p>
      </div>
      <div className="mt-[24px] flex justify-between">
        <IconStars />
      </div>
    </div>
  );
};
