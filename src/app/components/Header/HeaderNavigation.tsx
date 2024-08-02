"use client";

import { useState, useEffect } from "react";
import {
  navigationHeaderData,
  aboutSubMenu,
} from "@/app/utils/navigationHeaderData";
import { IconArrowAbout } from "@/app/icons/IconArrowAbout";

interface HeaderNavigationProps {
  onLinkClick?: (event: React.MouseEvent) => void;
  closeAboutSection?: boolean;
}

export const HeaderNavigation = ({
  onLinkClick,
  closeAboutSection,
}: HeaderNavigationProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (closeAboutSection) {
      setOpenIndex(null);
    }
  }, [closeAboutSection]);

  const handleToggle = (index: number | null, event: React.MouseEvent) => {
    event.stopPropagation();
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubMenuLinkClick = () => {
    setOpenIndex(null);
  };

  return (
    <nav>
      <ul className="desktop:flex-row desktop:gap-[32px] flex flex-col gap-[12px]">
        {navigationHeaderData.map((item, index) => (
          <li
            key={index}
            className={`text-14 desktop:text-16 group font-medium leading-[1.5] ${index === 1 ? "desktop:relative" : ""}`}
          >
            <div
              className="group flex cursor-pointer items-center gap-[10px]"
              onClick={(event) => {
                if (index === 1) {
                  handleToggle(index, event);
                } else if (onLinkClick) {
                  onLinkClick(event);
                }
              }}
            >
              <a
                href={item.href}
                className="focus:text-violet group-hover:text-violet transition duration-300 ease-in-out"
                onClick={handleSubMenuLinkClick}
              >
                {item.label}
              </a>
              {index === 1 && (
                <div
                  className={`transform transition-transform duration-300 ease-in-out ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <IconArrowAbout className="fill-dark group-hover:fill-violet transform transition-transform duration-300 ease-in-out" />
                </div>
              )}
            </div>
            {index === 1 && openIndex === index && (
              <ul className="desktop:absolute desktop:z-50 desktop:ml-[12px] desktop:px-[8px] desktop:pt-[18px] ml-[24px] w-auto bg-white pt-[12px]">
                {aboutSubMenu.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className="mb-2 whitespace-nowrap pb-[8px] font-normal"
                  >
                    <a
                      href={subItem.href}
                      className="hover:text-violet focus:text-violet transition duration-300 ease-in-out"
                      onClick={handleSubMenuLinkClick}
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
