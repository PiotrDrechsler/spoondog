import Image from "next/image";

interface PricesHeadProps {
  imageSrc: string;
  title: string;
  subTitle?: string;
}

export const PricesHead: React.FC<PricesHeadProps> = ({
  imageSrc,
  title,
  subTitle,
}) => {
  return (
    <div className="h-[225px] w-full text-center">
      <Image
        src={imageSrc}
        alt={title}
        width={100}
        height={100}
        className="mx-auto mb-[15px] rounded-radius24"
        priority
      />
      <p className="text-[16px] font-bold leading-[1.2]">{title}</p>
      <p className="text-[16px] font-normal leading-[1.2]">{subTitle ? subTitle : " "}</p>
    </div>
  );
};
