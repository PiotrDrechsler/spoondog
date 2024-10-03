import { LogoFooter } from "@/app/icons/LogoFooter";
import { HeroButtonBox } from "../Hero/HeroButtonBox"

export const HeroInfo = () => {
  return (
    <>
      <div className="mx-[18px] mt-[402px] h-[308px] w-auto tablet:mt-[322px] tablet:w-[230px] tablet:h-[200px] desktop:mx-0 desktop:mt-[10vh] desktop:w-[476px]">
        <div className="align-items flex flex-col justify-start">
          <a href="/" className="hidden w-auto desktop:mb-[64px] desktop:block">
            <LogoFooter />
          </a>
          <h1 className="text-26 font-bold leading-[1.1] tracking-[-0.02em] tablet:mb-[16px] desktop:mb-[24px] desktop:text-50">
            Zadbaj o komfort swojego pupila
          </h1>
          <p className="hidden tablet:block desktop:tracking-0 my-[16px] text-[16px] font-normal tracking-[-0.02em] desktop:hidden desktop:text-[22px] desktop:leading-[1.5]">
            Salon pielęgnacyjny dla zwierząt w Tułowicach
          </p>
          <p className="block my-[16px] tablet:hidden desktop:block desktop:text-[20px] desktop:leading-[1.5]">
            Jeżeli chcesz aby Twój pies polubił zabiegi pielęgnacyjne to
            zapraszam do mojego salonu. 
          </p>
          <span className="block desktop:block tablet:hidden desktop:text-[20px] desktop:font-medium desktop:leading-[1.5]">
            Przyjdź i przekonaj się jak działa magia gestów i porozumienia.
          </span>
        </div>
        <div className="mt-[20px] flex flex-col items-center justify-center gap-[26px] tablet:hidden desktop:block desktop:mt-[20px] desktop:items-start desktop:justify-end">
          <HeroButtonBox />
        </div>
      </div>
    </>
  );
};
