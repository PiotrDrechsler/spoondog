"use client";
import { useState, useEffect, useRef } from "react";
import Container from "../Share/Container";
import { HeaderNavigation } from "./HeaderNavigation";
import { HeaderMobile } from "./HeaderMobile";
import { HeaderDesktop } from "./HeaderDesktop";
import { IconOpenMobileMenu } from "@/icons/IconOpenMobileMenu";
import { IconCloseMobileMenu } from "@/icons/IconCloseMobileMenu";
import { PhoneButton } from "../Share/PhoneButton";
import { cn } from "@/utils/helpers";
import {
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
} from "@/utils/touchHandlers";

export const Header = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [iconOpen, setIconOpen] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [closeAboutSection, setCloseAboutSection] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1440);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setCloseAboutSection(true);
      setTimeout(() => setCloseAboutSection(false), 300);
    }
    setTimeout(() => {
      setIconOpen(!iconOpen);
    }, 300);
  };

  const handleMenuClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <header
      className="fixed top-0 z-20 w-full rounded-header-radius bg-white shadow-header-shadow"
      onTouchStart={(e) => handleTouchStart(e, touchStartX)}
      onTouchMove={(e) => handleTouchMove(e, touchEndX)}
      onTouchEnd={() =>
        handleTouchEnd(touchStartX, touchEndX, isMenuOpen, handleToggleMenu)
      }
    >
      <div className="relative">
        {!isDesktop && (
          <Container>
            <HeaderMobile
              iconOpen={iconOpen}
              svgOpen={<IconOpenMobileMenu />}
              svgClose={<IconCloseMobileMenu />}
              onClick={handleToggleMenu}
              aria-expanded={isMenuOpen}
            />
          </Container>
        )}
        {!isDesktop && (
          <div
            onClick={handleToggleMenu}
            className={cn(
              "z-100 absolute left-0 top-0 h-screen w-screen bg-backdrop transition duration-300 ease-in-out",
              isMenuOpen ? "translate-x-0" : "translate-x-full",
            )}
            aria-hidden={!isMenuOpen}
          >
            <div className="w-full rounded-menu-radius bg-white pb-[20px]">
              <Container>
                <HeaderMobile
                  iconOpen={iconOpen}
                  svgOpen={<IconOpenMobileMenu />}
                  svgClose={<IconCloseMobileMenu />}
                  onClick={handleToggleMenu}
                  aria-expanded={isMenuOpen}
                />
              </Container>
              <div className="my-[20px] h-[1px] w-full bg-greyLines"></div>

              <Container>
                <div className="flex">
                  <div onClick={handleMenuClick}>
                    <HeaderNavigation
                      onLinkClick={handleToggleMenu}
                      closeAboutSection={closeAboutSection}
                    />
                  </div>
                </div>
                <div className="mb-[20px] mt-[12px] h-[1px] w-full bg-greyLines"></div>
                <div className="flex justify-center">
                  <PhoneButton content="+48 692 394 385" />
                </div>
              </Container>
            </div>
          </div>
        )}
        {isDesktop && <HeaderDesktop />}
      </div>
    </header>
  );
};
