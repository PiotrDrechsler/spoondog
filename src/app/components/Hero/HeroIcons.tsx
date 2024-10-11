import { HeroSingleIcon } from "./HeroSingleIcon";
import { heroIconsData } from "../../utils/heroIconsData";

export const HeroIcons = () => {
  return (
    <div className="mb-[25px] mt-[60px] flex h-auto w-auto flex-row place-content-between desktop:h-[120px] xxl:h-[30px]">
      {heroIconsData.map((icon, index) => (
        <div key={index} className="">
          <HeroSingleIcon title={icon.title} imageSrc={icon.imageSrc} />
        </div>
      ))}
    </div>
  );
};
