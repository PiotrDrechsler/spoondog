import { LogoFooter } from "@/app/icons/LogoFooter";
import { PhoneButton } from "../Share/PhoneButton";

export const HeroInfo = () => {
  return (
    <>
      <div className="mx-[18px] mt-[402px] h-[308px] w-auto desktop:mx-0 desktop:mt-[80px] desktop:w-[476px]">
        <div className="align-items flex flex-col justify-start">
          <a href="/" className="hidden w-auto desktop:mb-[64px] desktop:block">
            <LogoFooter />
          </a>
          <h1 className="text-26 font-bold leading-[1.1] tracking-[-0.02em] desktop:mb-[24px] desktop:text-50">
            Zadbaj o komfort swojego pupila
          </h1>
          <p className="desktop:tracking-0 my-[16px] block text-[16px] font-normal tracking-[-0.02em] desktop:hidden desktop:text-[22px] desktop:leading-[1.5]">
            Salon pielęgnacyjny dla zwierząt w Tułowicach
          </p>
          <p className="hidden desktop:block desktop:text-[20px] desktop:leading-[1.5]">
            Jeżeli chcesz aby Twój pies polubił zabiegi pielęgnacyjne to
            zapraszam do mojego salonu. Moim priorytetem jest jest ograniczenie
            stresu zwierzęciu. Nie podaję środków farmakologicznych.{" "}
          </p>
          <span className="hidden desktop:block desktop:text-[20px] desktop:font-medium desktop:leading-[1.5]">
            Przyjdź i przekonaj się jak działa magia gestów i porozumienia.
          </span>
        </div>
        <div className="mt-[20px] flex flex-col items-center justify-center gap-[26px] desktop:mt-0 desktop:items-start desktop:justify-end">
          <div className="h-auto w-[230px] text-center">
            <p className="block text-18 font-normal leading-[1.3] tracking-[-0.02em] desktop:hidden desktop:text-[22px]">
              Zadzwoń i umów się na wizytę już dziś!
            </p>
          </div>
          <div className="h-[42px] w-[243px]">
            <PhoneButton content="+48 692 394 385" />
          </div>
        </div>
      </div>
    </>
  );
};
