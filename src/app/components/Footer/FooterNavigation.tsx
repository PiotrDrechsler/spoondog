import { navigationData } from "../../utils/navigationData";

export const FooterNavigation = () => {
  return (
    <div className="flex flex-col w-full font-medium desktop:max-w-[203px]">
      <h4 className="font-semibold leading-6 mb-3 text-base desktop:mb-6">
        Strona główna
      </h4>
      <ul className="flex flex-col gap-[8px] desktop:gap-[16px]">
        {navigationData.map((item, index) => (
          <li
            key={index}
            className="text-14  leading-[21px] transition duration-300 ease-in-out hover:text-violet focus:text-violet"
          >
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
