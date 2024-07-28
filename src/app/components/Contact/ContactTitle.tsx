import { UnderlineContactTitleDesktop } from "@/app/icons/UnderlineContactTitleDesktop";
import { UnderlineContactTitleMobile } from "@/app/icons/UnderlineContactTitleMobile";

export const ContactTitle = () => {
  return (
    <div className="mb-[24px]">
      <h4 className="mb-[16px] text-base font-semibold leading-6 desktop:mb-6">
        Kontakt
      </h4>
      <div className="relative">
        <h2 className="mb-[42px] text-26 font-bold leading-[1.2] tracking-[-0.04em] desktop:text-48">
          Skontaktuj się z nami!
        </h2>
        <div className="absolute bottom-[-28px] left-0 hidden desktop:block">
          <UnderlineContactTitleDesktop />
        </div>
        <div className="absolute bottom-[-28px] left-0 block desktop:hidden">
          <UnderlineContactTitleMobile />
        </div>
      </div>
      <p className="text-14 leading-[1.5] desktop:text-18">
        Zapraszamy do naszego salonu w Tułowicach.
      </p>
    </div>
  );
};
