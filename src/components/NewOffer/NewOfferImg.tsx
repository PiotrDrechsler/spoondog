import Image from "next/image";
import { StaticImageData } from "next/image";
import { TitleProps } from "@/utils/Types";
import { cn } from "@/utils/helpers";

interface NewOfferImgProps extends TitleProps {
  imageSrc: StaticImageData;
  positionClass: string;
  positionStyle?: React.CSSProperties;
}

export const NewOfferImg: React.FC<NewOfferImgProps> = ({
  imageSrc,
  title,
  positionClass,
  positionStyle,
}) => {
  return (
    <div className={cn("absolute", positionClass)} style={positionStyle}>
      <div className="relative h-[191px] w-[115px] desktop:h-[384px] desktop:w-[240px]">
        <div className="mb-[10px]">
          <p className="text-[20px] font-bold leading-[1.2] desktop:text-[28px]">
            {title}
          </p>
        </div>
        <div className="absolute bottom-0">
          <Image
            src={imageSrc}
            alt={title}
            className="h-auto w-full rounded-radius24 desktop:h-[350px]"
            priority
          />
        </div>
      </div>
    </div>
  );
};
