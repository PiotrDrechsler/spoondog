"use client";
import { useState } from "react";
import Container from "../Share/Container";
import { PricesTable } from "./PricesTable";
import { PricesData } from "@/app/utils/PricesData";

export const Prices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === PricesData.length - 1 ? 0 : prevIndex + 1,
    );
  };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? PricesData.length - 1 : prevIndex - 1,
//     );
//   };

  const currentData = PricesData[currentIndex];

  return (
    <section id="prices">
      <Container>
        <div className="h-auto">
          <div className="tablet:h-auto desktop:h-[920px]">
            <div className="py-[48px]">
              <h1 className="mb-[8px] text-center text-[26px] font-bold leading-[1.3] desktop:text-[28px] desktop:leading-[1.2]">
                Cennik
              </h1>
              <p className="text-center text-[14px] leading-[1.5] desktop:text-[28px] desktop:leading-[1.75]">
                Sprawdź ceny naszych usług
              </p>
            </div>
            <div className="relative flex items-center justify-center">
              <PricesTable
                imageSrc={currentData.imageSrc}
                title={currentData.title}
                subTitle={currentData.subTitle}
                services={currentData.services}
              />
              <button onClick={handleNext} className="absolute bg-slate-500 ml-1 p-2">
                &#8250;
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
