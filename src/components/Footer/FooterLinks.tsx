import { footerLinksData } from "../../utils/footerLinksData";
import Link from "next/link";

export const FooterLinks = () => {
  return (
    <div className="flex w-full flex-col desktop:max-w-[203px]">
      <h4 className="mb-3 text-base font-semibold leading-6 tablet:font-bold desktop:mb-6">
        Linki
      </h4>
      <ul className="flex flex-col gap-[8px] desktop:gap-[16px]">
        {footerLinksData.map((item, index) => {
          const DynamicTag = item.href.startsWith("/") ? Link : "a";
          return (
            <li key={index} className={index === 0 ? "" : "underline"}>
              <DynamicTag
                href={item.href}
                target={item.target}
                className="text-14 leading-[21px] transition duration-300 ease-in-out hover:text-violet focus:text-violet"
              >
                {item.label}
              </DynamicTag>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
