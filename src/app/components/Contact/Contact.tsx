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
    <section id="contact" className="py-[48px]">
      <Container>
        <ContactTitle />
        <div className="flex flex-col-reverse gap-[20px] desktop:flex-row desktop:gap-[0px]">
          <div
            className="cursor-pointer transition duration-500 ease-in-out desktop:mt-[77px] desktop:hover:scale-[1.03] desktop:focus:scale-[1.05]"
            onClick={handleMapClick}
          >
            <div className="hidden desktop:block">
              <MapContactDesktop />
            </div>
            <div className="block desktop:hidden">
              <MapContactMobile />
            </div>
          </div>
          <ContactContacts />
        </div>
      </Container>
    </section>
  );
};
