"use client";

import Container from "../Share/Container";
import { FooterNavigation } from "./FooterNavigation";
import { FooterContacts } from "./FooterContacts";
import { FooterLinks } from "./FooterLinks";
import { LogoFooter } from "@/app/icons/LogoFooter";
import { MapFooter } from "@/app/icons/MapFooter";
import { FooterFooter } from "./FooterFooter";
import { Paw45Desktop } from "@/app/icons/Paw45Desktop";
import { Paw135Desktop } from "@/app/icons/Paw135Desktop";
import { PawMobile } from "@/app/icons/PawMobile";

export const Footer = () => {
  const handleMapClick = () => {
    window.open(
      "https://www.google.com/maps?q=ul.Gruszkowa+26,+49-130+Tułowice",
      "_blank",
    );
  };

  return (
    <footer className="relative rounded-footer-radius bg-cream shadow-footer-shadow desktop:bg-white desktop:shadow-none">
      <div className="absolute bottom-[60px] left-1/2 -translate-x-1/2 transform desktop:hidden">
        <PawMobile />
      </div>
      <div className="absolute right-0 top-0 hidden desktop:block">
        <Paw135Desktop />
      </div>
      <div className="absolute bottom-0 left-0 hidden desktop:block">
        <Paw45Desktop />
      </div>
      <Container>
        <div className="relative z-10">
          <div className="flex flex-col pb-[30px] pt-[75px] desktop:flex-row desktop:pb-[26px] desktop:pt-[80px]">
            <div className="mx-auto mb-[51px] desktop:mx-0 desktop:mr-[123px]">
              <LogoFooter />
            </div>
            <div className="flex w-full flex-col gap-[30px] desktop:flex-row desktop:gap-[40px]">
              <FooterNavigation />
              <FooterContacts />
              <FooterLinks />
            </div>
            <div
              className="hidden cursor-pointer transition duration-500 ease-in-out hover:scale-[1.05] focus:scale-[1.05] desktop:block"
              onClick={handleMapClick}
            >
              <MapFooter />
            </div>
          </div>
          <FooterFooter />
        </div>
      </Container>
    </footer>
  );
};
