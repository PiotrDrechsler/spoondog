import { PhoneButton } from "../Share/PhoneButton";

export const HeroButtonBox = () => {
  return (
    <div>
      <div className="h-auto w-[230px] text-center tablet:w-full">
        <p className="mb-[26px] mt-[20px] block text-18 font-normal leading-[1.3] tracking-[-0.02em] tablet:mt-[40px] desktop:hidden desktop:text-[22px]">
          Zadzwoń i umów się na wizytę już dziś!
        </p>
      </div>
      <div className="mx-auto h-[42px] w-[243px] desktop:mx-0">
        <PhoneButton content="+48 692 394 385" />
      </div>
    </div>
  );
};
