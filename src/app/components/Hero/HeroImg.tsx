import Image from "next/image";
import heroDog from "@images/heroDog.png";

export const HeroImg = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute right-0 top-[80px] h-[305px] w-[264px] rounded-hero-radius bg-hero-bg shadow-hero-shadow desktop:w-[700px] desktop:h-[693px]"></div>
      <div className="absolute right-0 top-[105px] h-[280px] w-[280px] -rotate-90 desktop:w-[665px] desktop:h-[650px] desktop:top-[116px] desktop:right-[-8px] desktop:mb-[30px]">
        <Image src={heroDog} alt="Dog image" fill priority className="object-cover" />
      </div>
    </div>
  );
};
