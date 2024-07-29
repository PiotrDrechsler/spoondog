import { UnderlineContactTitleDesktop } from "@/app/icons/UnderlineContactTitleDesktop";
import { UnderlineContactTitleMobile } from "@/app/icons/UnderlineContactTitleMobile";

export const ContactTitle = () => {
  return (
    <div className="mb-[24px]">
      <h4 className="text-greyFont mb-[4px] text-14 font-normal leading-6 desktop:mb-[16px] desktop:text-16">
        Kontakt
      </h4>
      <div className="bg-greyLightLines mb-[16px] h-[1px] w-full desktop:hidden"></div>
      <div className="relative">
        <h2 className="mb-[10px] text-26 font-bold leading-[1.2] tracking-[-0.04em] desktop:mb-[42px] desktop:text-48">
          Skontaktuj się z nami!
        </h2>
        <div className="absolute bottom-[-28px] left-0 hidden desktop:block">
          <UnderlineContactTitleDesktop />
        </div>
      </div>
      <p className="text-14 leading-[1.5] desktop:text-18">
        Zapraszamy do naszego salonu w Tułowicach.
      </p>
    </div>
  );
};
