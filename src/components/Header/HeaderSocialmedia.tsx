import { IconFacebookHeader } from "@/icons/IconFacebookHeader";
import { IconInstagramHeader } from "@/icons/IconInstagramHeader";

export const HeaderSocialmedia = () => {
  return (
    <div className="flex gap-[16px]">
      <a
        className="transition duration-300 ease-in-out focus:scale-[1.05] desktop:hover:scale-[1.05]"
        href="https://www.instagram.com/spoondog_salon_groomer/?igsh=MWhtd3MzbjNjcGp5cQ%3D%3D&utm_source=qr"
        target="_blank"
      >
        <IconInstagramHeader />
      </a>
      <a
        className="transition duration-300 ease-in-out focus:scale-[1.05] desktop:hover:scale-[1.05]"
        href="https://www.facebook.com/p/SPOON-DOG-Tu%C5%82owice-Salon-piel%C4%99gnacyjny-dla-pupili-100063791190331/?mibextid=LQQJ4d&rdid=VjtjoUw7PCrXtUfs&share_url=https%3A%2F%2Fm.facebook.com%2Fshare%2FUioNKbm7xcsmt423%2F%3Fmibextid%3DLQQJ4d%26wtsid%3Drdr_0TkWALjCTE4HKEveF&refsrc=deprecated&_rdr"
        target="_blank"
      >
        <IconFacebookHeader />
      </a>
    </div>
  );
};
