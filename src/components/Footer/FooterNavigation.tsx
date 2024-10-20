import Link from "next/link";
import { navigationData } from "../../utils/navigationData";

export const FooterNavigation = () => {
  return (
    <div className="flex w-full flex-col font-medium desktop:max-w-[203px]">
      <h4 className="mb-3 text-base font-semibold leading-6 tablet:font-bold desktop:mb-6">
        Strona główna
      </h4>
      <ul className="flex flex-col gap-[8px] desktop:gap-[16px]">
        {navigationData.map((item, index) => (
          <li
            key={index}
            className="text-14 leading-[21px] transition duration-300 ease-in-out hover:text-violet focus:text-violet"
          >
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
