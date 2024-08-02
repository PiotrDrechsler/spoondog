"use client";
import { useState, useEffect } from "react";
import Container from "../Share/Container";
import { HeaderNavigation } from "./HeaderNavigation";
import { HeaderMobile } from "./HeaderMobile";
import { HeaderDesktop } from "./HeaderDesktop";
import { IconOpenMobileMenu } from "@/app/icons/IconOpenMobileMenu";
import { IconCloseMobileMenu } from "@/app/icons/IconCloseMobileMenu";
import { PhoneButton } from "../Share/PhoneButton";

export const Header = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [iconOpen, setIconOpen] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [closeAboutSection, setCloseAboutSection] = useState(false);

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
    <header className="rounded-header-radius shadow-header-shadow fixed top-0 z-20 w-full bg-white">
      <div className="relative">
        {!isDesktop && (
          <Container>
            <HeaderMobile
              iconOpen={iconOpen}
              svgOpen={<IconOpenMobileMenu />}
              svgClose={<IconCloseMobileMenu />}
              onClick={handleToggleMenu}
            />
          </Container>
        )}
        {!isDesktop && (
          <div
            onClick={handleToggleMenu}
            className={`z-100 ${isMenuOpen ? "translate-x-[0%]" : "translate-x-[100%]"} bg-backdrop absolute left-0 top-0 h-screen w-screen transition duration-300 ease-in-out`}
          >
            <div className="rounded-menu-radius w-full bg-white pb-[20px]">
              <Container>
                <HeaderMobile
                  iconOpen={iconOpen}
                  svgOpen={<IconOpenMobileMenu />}
                  svgClose={<IconCloseMobileMenu />}
                  onClick={handleToggleMenu}
                />
              </Container>
              <div className="bg-greyLines my-[20px] h-[1px] w-full"></div>

              <Container>
                <div className="flex">
                  <div onClick={handleMenuClick}>
                    <HeaderNavigation
                      onLinkClick={handleToggleMenu}
                      closeAboutSection={closeAboutSection}
                    />
                  </div>
                </div>
                <div className="bg-greyLines mb-[20px] mt-[12px] h-[1px] w-full"></div>
                <div className="flex justify-center">
                  <PhoneButton />
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
