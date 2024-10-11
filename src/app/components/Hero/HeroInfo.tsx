import { LogoFooter } from "@/app/icons/LogoFooter";
import { HeroButtonBox } from "../Hero/HeroButtonBox";
import Link from "next/link";

export const HeroInfo = () => {
  return (
    <div className="mx-[18px] mt-[402px] h-[308px] w-auto tablet:mt-[322px] tablet:h-[200px] tablet:w-[230px] desktop:mx-0 desktop:mt-[10vh] desktop:w-[476px] xxl:w-[700px]">
      <div className="align-items flex flex-col justify-start">
        <Link href="/" className="hidden w-auto desktop:mb-[64px] desktop:block">
          <LogoFooter />
        </Link>
        <h1 className="text-26 font-bold leading-[1.1] tracking-[-0.02em] tablet:mb-[16px] desktop:mb-[24px] desktop:text-50 xxl:mb-[60px]">
          Zadbaj o komfort swojego pupila
        </h1>
        <p className="desktop:tracking-0 my-[16px] hidden text-[16px] font-normal tracking-[-0.02em] tablet:block desktop:hidden desktop:text-[22px] desktop:leading-[1.5]">
          Salon pielęgnacyjny dla zwierząt w Tułowicach
        </p>
        <p className="my-[16px] block tablet:hidden desktop:block desktop:text-[20px] desktop:leading-[1.5] xxl:text-[22px] xxl:my-[20px]">
          Jeżeli chcesz aby Twój pies polubił zabiegi pielęgnacyjne to zapraszam
          do mojego salonu.
        </p>
        <span className="block tablet:hidden desktop:block desktop:text-[20px] desktop:font-medium desktop:leading-[1.5] xxl:text-[24px] xxl:font-medium ">
          Przyjdź i przekonaj się jak działa magia gestów i porozumienia.
        </span>
      </div>
      <div className="mt-[20px] flex flex-col items-center justify-center gap-[26px] tablet:hidden desktop:mt-[20px] desktop:block desktop:items-start desktop:justify-end xxl:mt-[80px]">
        <HeroButtonBox />
      </div>
    </div>
  );
};
