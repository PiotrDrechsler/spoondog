import { PhoneButton } from "../Share/PhoneButton";

export const HeroButtonBox = () => {
  return (
    <div>
      <div className="h-auto w-[230px] text-center tablet:w-full">
        <p className="mb-[26px] mt-[20px] block text-18 font-normal leading-[1.3] tracking-[-0.02em] tablet:mt-[20px]  desktop:hidden desktop:text-[22px] desktop:mt-[32px] xl:mt-[32px]">
          Zadzwoń i umów się na wizytę już dziś!
        </p>
      </div>
      <div className="mx-auto h-[42px] w-[243px] tablet:mb-[60px] desktop:mb-[156px] desktop:mx-0 xl:mb-[156px]">
        <PhoneButton content="+48 692 394 385" />
      </div>
    </div>
  );
};
