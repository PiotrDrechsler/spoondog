import Image from "next/image";
import heroDog from "@images/heroDog.png";

export const HeroImg = () => {
  return (
    <div className="relative h-full w-full">
      <div className="rounded-hero-radius bg-hero-bg shadow-hero-shadow absolute right-0 top-[80px] h-[305px] w-[264px] desktop:h-[693px] desktop:w-[700px]"></div>
      <div className="absolute right-0 top-[105px] h-[280px] w-[280px] -rotate-90 desktop:right-[-8px] desktop:top-[116px] desktop:mb-[30px] desktop:h-[650px] desktop:w-[665px]">
        <Image
          src={heroDog}
          alt="Dog image"
          fill
          sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
};
