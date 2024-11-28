import Image from "next/image";
import heroDog from "@images/heroDog.png";

export const HeroImg = () => {
  return (
    <div className="relative right-0 top-[80px] h-full max-h-[700px] desktop:-top-[100px]">
      <div className="absolute right-0 h-[288px] w-[306px] rounded-hero-radius bg-hero-bg shadow-hero-shadow tablet:h-[450px] tablet:w-[450px] desktop:h-[730px] desktop:w-[700px] xl:right-[80px] xl:h-[900px] xl:w-[900px] xl:rounded-hero-radius-big">
        <div className="absolute bottom-0 right-0 h-[280px] w-[280px] -rotate-90 overflow-hidden tablet:h-[430px] tablet:w-[430px] desktop:h-[700px] desktop:w-[700px] xl:bottom-[0px] xl:right-[0px] xl:h-[800px] xl:w-[800px] xl:rounded-hero-radius-dog">
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
