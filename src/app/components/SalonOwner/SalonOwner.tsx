import React from 'react';
import Image, { StaticImageData } from 'next/image';
import owner from '@images/owner.png';
import Container from "../Share/Container";



const SalonOwner: React.FC = () => {
    return (
        <section id="owner" className="pb-[48px] pt-[70px] desktop:pt-[88px]">
      <Container>
        <h2 className="text-left font-bold mb-4">O właścicielce salonu</h2>
        <div className="flex justify-center mb-4">
          <Image
            src={owner as StaticImageData}
            alt="Katarzyna Bober"
            className="w-fit h-fit object-cover"
            
          />
        </div>
        <div className="text-center">
          <h3 className="text-md text-left font-semibold">Katarzyna Bober</h3>
          <p className="text-sm text-left text-gray-700 mb-4">Technik weterynarii</p>
          <p className="text-sm text-left  text-gray-700 mb-4">
            Katarzyna Bober, technik weterynarii i właścicielka salonu groomerskiego Spoon Dog od 2011 roku, zdobyła swoje doświadczenie w Opolskim Schronisku dla Bezdomnych Zwierząt oraz studiując zootechnikę we Wrocławiu. Posiada dyplom groomera ze szkoły Pani Ewy Grabowskiej i certyfikat Emmy Pet, co pozwala jej dbać o higienę i zdrowie psów. Jako ambasador Blue Dog edukuje dzieci i dorosłych.
          </p>
          <button className="bg-yellow-400 text-black py-2 px-4 rounded-full font-semibold">
            Dowiedz się więcej
          </button>
        </div>
      </Container>
      </section>
    );
  };
  
  export default SalonOwner;