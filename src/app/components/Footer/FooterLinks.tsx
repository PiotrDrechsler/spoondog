import React from "react";
import { footerLinksData } from "../../utils/footerLinksData";

export const FooterLinks = () => {
  return (
    <div className="flex flex-col w-full desktop:max-w-[203px]">
      <h4 className="font-semibold leading-6 mb-3 text-base desktop:mb-6">
        Linki
      </h4>
      <ul className="flex flex-col gap-[8px] desktop:gap-[16px]">
        {footerLinksData.map((item, index) => (
          <li key={index} className={index === 0 ? "" : "underline"}>
            <a
              href={item.href}
              target={item.target}
              className="text-14  leading-[21px] transition duration-300 ease-in-out hover:text-violet focus:text-violet"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
