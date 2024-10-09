import Image from "next/image";
import heroScissors from "@images/heroScissors.png";
import { HeroSingleIcon } from "./HeroSingleIcon";
import { heroIconsData } from "../../utils/heroIconsData"


export const HeroIcons = () => {
    return (
        <div className=" h-auto w-auto mt-[60px] mb-[25px] flex flex-row place-content-between desktop:h-[120px] ">
      {heroIconsData.map((icon, index) => (
                <div key={index} className="">
                    <HeroSingleIcon title={icon.title} imageSrc={icon.imageSrc} />
                </div>
            ))}
        
      </div>
    
    )
}