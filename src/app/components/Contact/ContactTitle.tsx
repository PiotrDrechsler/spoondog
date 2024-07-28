import { UnderlineContactTitleDesktop } from "@/app/icons/UnderlineContactTitleDesktop";
import { UnderlineContactTitleMobile } from "@/app/icons/UnderlineContactTitleMobile";

export const ContactTitle = () => {
  return (
    <div className="mb-[24px]">
      <h4 className="font-semibold leading-6 mb-[16px] text-base desktop:mb-6">
        Kontakt
      </h4>
      <div className="relative">
        <h2 className="text-26 font-bold tracking-[-0.04em] leading-[1.2] mb-[42px] desktop:text-48">
          Skontaktuj się z nami!
        </h2>
        <div className="hidden desktop:block absolute bottom-[-28px] left-0">
          <UnderlineContactTitleDesktop />
        </div>
        <div className="block desktop:hidden absolute bottom-[-28px] left-0">
          <UnderlineContactTitleMobile />
        </div>
      </div>
      <p className="text-14 leading-[1.5] desktop:text-18">
        Zapraszamy do naszego salonu w Tułowicach.
      </p>
    </div>
  );
};
