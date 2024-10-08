import Image from "next/image"
import { TitleProps } from "@/app/utils/Types"

interface HeroSingleIconProps extends TitleProps {
    imageSrc: string,
}

export const HeroSingleIcon: React.FC<HeroSingleIconProps> = ({ title, imageSrc}) => {
    return (
        <div className="w-auto max-w-[106px] h-[106px] flex flex-col items-center justify-center gap-[16px]">
            <div className="w-[56px] h-[56px] border-2 border-yellow rounded-full flex items-center justify-center">
            <Image src={imageSrc} alt={title} width={35} height={35} />
            </div>
            <p className="text-14 leading-[1.2] text-center px-[5px]">{title}</p>
        </div>
    )
}; 