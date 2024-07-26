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
      "_blank"
    );
  };

  return (
    <footer className="bg-cream rounded-footer-radius shadow-footer-shadow relative desktop:bg-white desktop:shadow-none">
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[60px]  desktop:hidden">
        <PawMobile />
      </div>
      <div className="absolute right-0 top-0 hidden desktop:block">
        <Paw135Desktop />
      </div>
      <div className="absolute left-0 bottom-0 hidden desktop:block">
        <Paw45Desktop />
      </div>
      <Container>
        <div className="relative flex flex-col pt-[75px] pb-[30px] z-10 desktop:flex-row desktop:pt-[80px] desktop:pb-[26px]">
          <div className="mb-[51px] mx-auto desktop:mx-0  desktop:mr-[123px]">
            <LogoFooter />
          </div>
          <div className="flex flex-col gap-[30px] w-full desktop:flex-row desktop:gap-[40px]">
            <FooterNavigation />
            <FooterContacts />
            <FooterLinks />
          </div>
          <div
            className="hidden desktop:block transition duration-500 ease-in-out hover:scale-[1.05] focus:scale-[1.05] cursor-pointer"
            onClick={handleMapClick}
          >
            <MapFooter />
          </div>
        </div>
        <FooterFooter />
      </Container>
    </footer>
  );
};
