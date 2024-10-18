import Image from "next/image";
import { TitleProps } from "@/app/utils/Types";

interface HeroSingleIconProps extends TitleProps {
  imageSrc: string;
}

export const HeroSingleIcon: React.FC<HeroSingleIconProps> = ({
  title,
  imageSrc,
}) => {
  return (
    <div className="flex h-[106px] w-auto max-w-[106px] flex-col items-center justify-center gap-[16px]">
      <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full border-2 border-yellow">
        <Image src={imageSrc} alt={title} width={35} height={35} />
      </div>
      <p className="px-[5px] text-center text-14 leading-[1.2]">{title}</p>
    </div>
  );
};
