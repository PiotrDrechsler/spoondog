import React from "react";
import Image, { StaticImageData } from "next/image";
import owner from "@images/owner.png";
import Container from "../Share/Container";
import Button from "../Share/Button";
import { SectionHeading } from "../Share/SectionHeading";

const SalonOwner: React.FC = () => {
  return (
    <section id="owner" className="pb-[48px] pt-[70px] desktop:pt-[88px]">
      <Container>
        <SectionHeading
          sectionTitle="O nas / Katarzyna Bober"
          sectionMainHeading="O właścicielce salonu"
          sectionInfo={
            <>
              Katarzyna Bober - <strong>Technik weterynarii</strong>
            </>
          }
        />
        <div className="tablet:flex tablet:flex-row tablet:gap-10 desktop:flex-row-reverse desktop:justify-between">
          <div className="mb-10 flex h-[248px] w-[342px] justify-center tablet:my-auto desktop:h-[391px] desktop:w-[540px] desktop:-translate-y-[60px]">
            <Image
              src={owner as StaticImageData}
              alt="Katarzyna Bober, właścicielka salonu groomerskiego Spoon Dog"
              className="h-full w-full object-cover"
              sizes="(max-width: 1439px) 342px, (min-width: 1440px) 540px"
            />
          </div>
          <div className="text-center tablet:w-[342px] desktop:w-[486px]">
            <p className="mb-[26px] self-stretch text-left text-14 text-sm leading-6 desktop:mb-8 desktop:text-16">
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
            <div className="block h-[42px] w-[210px] desktop:ml-auto desktop:h-[52px] desktop:w-[259px]">
              <Button
                href="/owner"
                content="Dowiedz się więcej"
                aria-label="Dowiedz się więcej o właścicielce salonu Spoon Dog"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SalonOwner;
