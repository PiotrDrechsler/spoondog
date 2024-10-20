"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  navigationHeaderData,
  aboutSubMenu,
} from "@/utils/navigationHeaderData";
import { IconArrowAbout } from "@/icons/IconArrowAbout";
import { cn } from "@/utils/helpers";

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
      <ul className="flex flex-col gap-[12px] desktop:flex-row desktop:gap-[32px]">
        {navigationHeaderData.map((item, index) => (
          <li
            key={index}
            className={cn(
              "group text-14 font-medium leading-[1.5] desktop:text-16",
              index === 1 && "desktop:relative",
            )}
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
              <Link
                href={item.href}
                className="transition duration-300 ease-in-out focus:text-violet group-hover:text-violet"
                onClick={handleSubMenuLinkClick}
              >
                {item.label}
              </Link>
              {index === 1 && (
                <div
                  className={cn(
                    "transform transition-transform duration-300 ease-in-out",
                    openIndex === index && "rotate-180",
                  )}
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
                    <Link
                      href={subItem.href}
                      className="transition duration-300 ease-in-out hover:text-violet focus:text-violet"
                      onClick={handleSubMenuLinkClick}
                    >
                      {subItem.label}
                    </Link>
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
