"use client";
import { useEffect, useState } from "react";
import Container from "../Share/Container";
import { PricesTable } from "./PricesTable";
import { PricesData } from "@/utils/PricesData";
import { IconArrowRight } from "../../icons/IconArrowRight";

export const Prices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 600);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % PricesData.length);
  };

  return (
    <section id="prices" className="overflow-hidden">
      <Container>
        <div className="h-auto">
          <div className="tablet:h-auto desktop:h-auto">
            <div className="py-[48px]">
              <h1 className="mb-[8px] text-center text-[26px] font-bold leading-[1.3] desktop:text-[28px] desktop:leading-[1.2]">
                Cennik
              </h1>
              <p className="text-center text-[14px] leading-[1.5] desktop:text-[28px] desktop:leading-[1.75]">
                Sprawdź ceny naszych usług
              </p>
            </div>
            <div className="relative flex items-center justify-center">
              {isMobile ? (
                <>
                  <PricesTable servicesData={[PricesData[currentIndex]]} />
                  <button
                    onClick={handleNext}
                    className="ml-[10px] h-[38px] w-[38px] rounded-full border-2 border-black bg-white p-[6px]"
                  >
                    <IconArrowRight className="h-5 w-5 text-black" />
                  </button>
                </>
              ) : (
                <PricesTable servicesData={PricesData} />
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
