"use client";

import { useState } from "react";
import {
  navigationHeaderData,
  aboutSubMenu,
} from "@/app/utils/navigationHeaderData";
import { IconArrowAbout } from "@/app/icons/IconArrowAbout";

export const HeaderNavigation = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <nav>
      <ul className="flex flex-col gap-[12px] desktop:flex-row desktop:gap-[32px]">
        {navigationHeaderData.map((item, index) => (
          <li
            key={index}
            className={`group text-14 font-medium leading-[1.5] desktop:text-16 ${index === 1 ? "desktop:relative" : ""}`}
          >
            <div
              className="group flex cursor-pointer items-center gap-[10px]"
              onClick={() => handleToggle(index)}
            >
              <a
                href={item.href}
                className="transition duration-300 ease-in-out focus:text-violet group-hover:text-violet"
              >
                {item.label}
              </a>
              {index === 1 && (
                <div
                  className={`arrow-icon transform transition-transform duration-300 ease-in-out ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <IconArrowAbout className="transform fill-dark transition-transform duration-300 ease-in-out group-hover:fill-violet" />
                </div>
              )}
            </div>
            {index === 1 && openIndex === index && (
              <ul className="ml-[24px] w-auto bg-white pt-[12px] desktop:absolute desktop:z-50 desktop:ml-[12px] desktop:px-[8px] desktop:pt-[18px]">
                {aboutSubMenu.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className="mb-2 whitespace-nowrap pb-[8px] font-normal"
                  >
                    <a
                      href={subItem.href}
                      className="transition duration-300 ease-in-out hover:text-violet focus:text-violet"
                    >
                      {subItem.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
