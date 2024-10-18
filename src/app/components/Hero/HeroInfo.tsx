import Link from "next/link";
import { LogoFooter } from "@/app/icons/LogoFooter";
import { HeroButtonBox } from "../Hero/HeroButtonBox";
import { HeroIcons } from "./HeroIcons";

export const HeroInfo = () => {
  return (
    <div className="w-fill mx-[18px] mt-[402px] h-[507px] tablet:mt-[151px] tablet:h-[408px] tablet:w-[230px] desktop:mt-[10px] desktop:w-[476px] xl:w-[476px]">
      <div className="align-items flex flex-col justify-start">
        <Link
          href="/"
          className="hidden w-auto tablet:mb-[60px] tablet:block desktop:mb-[64px] desktop:block"
        >
          <LogoFooter />
        </Link>
        <h1 className="text-26 font-bold leading-[1.1] tracking-[-0.02em] tablet:mb-[16px] desktop:mb-[24px] desktop:text-50 xxl:mb-[60px]">
          Zadbaj o komfort swojego pupila
        </h1>
        <p className="mt-[16px] block desktop:text-[20px] desktop:leading-[1.5] xl:text-[20px]">
          Jeżeli chcesz aby Twój pies polubił zabiegi pielęgnacyjne to zapraszam
          do mojego salonu.{" "}
          <span className="font-medium desktop:text-[20px] desktop:leading-[1.5] xl:text-[20px]">
            Przyjdź i przekonaj się jak działa magia gestów i porozumienia.
          </span>
        </p>
      </div>
      <div className="mt-[20px] flex flex-col items-center justify-center gap-[60px] tablet:hidden desktop:mt-[32px] desktop:block desktop:items-start desktop:justify-end">
        <HeroButtonBox />
        <div className="block tablet:hidden desktop:mt-[156px] desktop:block">
          <HeroIcons />
        </div>
      </div>
    </div>
  );
};
