import React from "react";
import Image, { StaticImageData } from "next/image";
import owner from "@images/owner.png";
import Container from "../Share/Container";

const SalonOwner: React.FC = () => {
  return (
    <section id="owner" className="pb-[48px] pt-[70px] desktop:pt-[88px]">
      <Container>
        <p className="mb-3 border-b border-x-greyLightLines pb-1 text-14 leading-6 text-greyFont desktop:border-b-0 desktop:pb-0 desktop:text-16">
          O nas / Katarzyna Bober
        </p>
        <h2 className="mb-10 text-left text-26 font-bold desktop:text-32">
          O właścicielce salonu
        </h2>
        <div className="mb-10 flex h-[248px] w-[342px] justify-center">
          <Image
            src={owner as StaticImageData}
            alt="Katarzyna Bober"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-center">
          <h3 className="text-md mb-1 text-left text-20 font-semibold desktop:text-26">
            Katarzyna Bober
          </h3>
          <p className="mb-4 text-left text-16 text-sm text-gray-700 desktop:text-18">
            Technik weterynarii
          </p>
          <p className="mb-4 self-stretch text-left text-14 text-sm text-gray-700 desktop:text-16">
            Katarzyna Bober, technik weterynarii i właścicielka salonu
            groomerskiego Spoon Dog od 2011 roku, zdobyła swoje doświadczenie w
            Opolskim Schronisku dla Bezdomnych Zwierząt oraz studiując
            zootechnikę we Wrocławiu. Posiada dyplom groomera ze szkoły Pani Ewy
            Grabowskiej i certyfikat Emmy Pet, co pozwala jej dbać o higienę i
            zdrowie psów. Jako ambasador Blue Dog edukuje dzieci i dorosłych.
          </p>
          <button className="bg-yellow-400 rounded-full px-4 py-2 font-semibold text-black">
            Dowiedz się więcej
          </button>
        </div>
      </Container>
    </section>
  );
};

export default SalonOwner;
