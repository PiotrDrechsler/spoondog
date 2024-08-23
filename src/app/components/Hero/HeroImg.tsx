import Image from "next/image";
import heroDog from "@images/heroDog.png";

export const HeroImg = () => {
  return (
    <div className="relative right-0 top-[80px] h-full max-h-[700px] w-full">
    <div className="absolute right-0 w-[60vw] h-[60vw] rounded-hero-radius bg-hero-bg shadow-hero-shadow tablet:w-[45vw] tablet:h-[45vw] desktop:w-[50vw] desktop:h-[50vw] desktop:max-h-[750px] desktop:max-w-[750px]">
      <div className="absolute right-0 bottom-0 h-[55vw] w-[55vw] -rotate-90 tablet:h-[40vw] tablet:w-[40vw] desktop:h-[45vw] desktop:w-[45vw] desktop:max-h-[750px] desktop:max-w-[750px]">
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
  </div>
  
  );
};
