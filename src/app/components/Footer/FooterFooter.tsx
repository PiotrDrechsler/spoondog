import { IconFacebook } from "@/app/icons/IconFacebook";
import { IconInstagram } from "@/app/icons/IconInstagram";

export const FooterFooter = () => {
  return (
    <div className="flex flex-col gap-[18px] border-t-[1px] border-solid border-dark pb-[40px] pt-[16px] desktop:flex-row desktop:items-center desktop:justify-between desktop:pb-[86px] desktop:pt-[32px]">
      <div className="flex flex-col gap-[24px] text-14 leading-[21px] desktop:flex-row">
        <p>2024</p>
        <a
          href="/regulations"
          className="underline transition duration-300 ease-in-out hover:text-violet focus:text-violet"
        >
          Regulamin
        </a>
      </div>
      <div className="flex gap-[12px]">
        <a
          href="https://www.facebook.com/p/SPOON-DOG-Tu%C5%82owice-Salon-piel%C4%99gnacyjny-dla-pupili-100063791190331/?mibextid=LQQJ4d&rdid=VjtjoUw7PCrXtUfs&share_url=https%3A%2F%2Fm.facebook.com%2Fshare%2FUioNKbm7xcsmt423%2F%3Fmibextid%3DLQQJ4d%26wtsid%3Drdr_0TkWALjCTE4HKEveF&refsrc=deprecated&_rdr"
          target="_blank"
        >
          <IconFacebook />
        </a>
        <a
          href="https://www.instagram.com/spoondog_salon_groomer/?igsh=MWhtd3MzbjNjcGp5cQ%3D%3D&utm_source=qr"
          target="_blank"
        >
          <IconInstagram />
        </a>
      </div>
    </div>
  );
};
