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
        <h2 className="mb-10 text-left text-26 font-bold leading-5 tracking-[-.52px] desktop:text-32 desktop:font-medium desktop:tracking-[-.64px]">
          O właścicielce salonu
        </h2>
        <div className="desktop:flex desktop:flex-row-reverse desktop:justify-between">
          <div className="mb-10 flex h-[248px] w-[342px] justify-center desktop:h-[391px] desktop:w-[540px]">
            <Image
              src={owner as StaticImageData}
              alt="Katarzyna Bober"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-center desktop:h-[430px] desktop:w-[486px]">
            <h3 className="text-md mb-1 text-left text-20 font-medium leading-6 tracking-[-.4px] desktop:mb-4 desktop:text-26 desktop:font-normal desktop:-tracking-normal">
              Katarzyna Bober
            </h3>
            <p className="mb-4 text-left text-16 text-sm leading-6 tracking-[-.32px] desktop:mb-4 desktop:text-18 desktop:font-medium desktop:tracking-normal">
              Technik weterynarii
            </p>
            <p className="mb-[26px] self-stretch text-left text-14 text-sm leading-6 desktop:mb-4 desktop:text-16">
              Katarzyna Bober, technik weterynarii i właścicielka salonu
              groomerskiego Spoon Dog od 2011 roku, zdobyła swoje doświadczenie
              w Opolskim Schronisku dla Bezdomnych Zwierząt oraz studiując
              zootechnikę we Wrocławiu. Posiada dyplom groomera ze szkoły Pani
              Ewy Grabowskiej i certyfikat Emmy Pet, co pozwala jej dbać o
              higienę i zdrowie psów. Jako ambasador Blue Dog edukuje dzieci i
              rodziców o bezpieczeństwie wokół psów. W swojej pracy Katarzyna
              unika środków uspokajających, buduje zaufanie z każdym psem, a jej
              wieloletnie doświadczenie zapewnia najwyższy poziom usług
              pielęgnacyjnych.
            </p>
            <button className="bg-yellow-400 rounded-full px-4 py-2 font-semibold text-black">
              Dowiedz się więcej
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SalonOwner;