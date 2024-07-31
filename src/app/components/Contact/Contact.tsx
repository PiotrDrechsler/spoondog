"use client";

import Container from "../Share/Container";
import { ContactTitle } from "./ContactTitle";
import { MapContactDesktop } from "@/app/icons/MapContactDesktop";
import { MapContactMobile } from "@/app/icons/MapContactMobile";
import { ContactContacts } from "./ContactContacts";

export const Contact = () => {
  const handleMapClick = () => {
    window.open(
      "https://www.google.com/maps?q=ul.Gruszkowa+26,+49-130+Tułowice",
      "_blank",
    );
  };

  return (
    <section id="contact" className="desktop:pt-[88px] pb-[48px] pt-[70px]">
      <Container>
        <ContactTitle />
        <div className="desktop:flex-row desktop:gap-[0px] flex flex-col-reverse gap-[20px]">
          <div
            className="desktop:mt-[77px] desktop:hover:scale-[1.03] desktop:focus:scale-[1.05] cursor-pointer transition duration-500 ease-in-out"
            onClick={handleMapClick}
          >
            <div className="desktop:block hidden">
              <MapContactDesktop />
            </div>
            <div className="desktop:hidden block">
              <MapContactMobile />
            </div>
          </div>
          <ContactContacts />
        </div>
      </Container>
    </section>
  );
};
