import { IconLocation } from "@/icons/IconLocation";
import { IconPhone } from "@/icons/IconPhone";
import { IconEmail } from "@/icons/IconEmail";

export const ContactContacts = () => {
  return (
    <div className="relative z-10 w-full rounded-radius24 border-[1px] border-greyBorders bg-cream p-[32px] shadow-boxes-shadow">
      <p className="mb-[4px] text-26 leading-[1.2] desktop:mb-[32px] desktop:text-48">
        Tułowice
      </p>
      <div className="mb-[16px] h-[1px] w-full bg-greyLines desktop:mb-[32px] desktop:max-w-[490px]"></div>
      <div className="flex flex-col gap-[24px] leading-[1.5] desktop:text-18">
        <div>
          <div className="mb-[8px] flex items-center gap-[10px] desktop:flex-col desktop:items-start desktop:gap-[16px]">
            <div>
              <IconLocation />
            </div>
            <p className="text-18 font-semibold leading-[1.4] desktop:text-20 desktop:font-bold">
              Adres
            </p>
          </div>
          <p className="font-normal">ul. Gruszkowa 26</p>
          <p className="font-normal">49-130 Tułowice</p>
        </div>
        <div>
          <div className="mb-[8px] flex items-center gap-[10px] desktop:flex-col desktop:items-start desktop:gap-[16px]">
            <div>
              <IconPhone />
            </div>
            <p className="text-18 font-semibold leading-[1.4] desktop:text-20 desktop:font-bold">
              Telefon
            </p>
          </div>
          <a
            href="tel:+48692394385"
            className="font-normal underline transition duration-300 ease-in-out hover:text-violet focus:text-violet"
          >
            +48 692 394 385
          </a>
          <p className="">
            W celu umówienia wizyty prosimy o kontakt telefoniczny
          </p>
        </div>
        <div>
          <div className="mb-[8px] flex items-center gap-[10px] desktop:flex-col desktop:items-start desktop:gap-[16px]">
            <div>
              <IconEmail />
            </div>
            <p className="text-18 font-semibold leading-[1.4] desktop:text-20 desktop:font-bold">
              Email
            </p>
          </div>
          <a
            href="mailto:salon@spoondog.eu"
            className="font-normal underline transition duration-300 ease-in-out hover:text-violet focus:text-violet"
          >
            salon@spoondog.eu
          </a>
        </div>
      </div>
    </div>
  );
};
