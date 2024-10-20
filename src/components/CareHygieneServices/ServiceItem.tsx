"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CareHygieneService } from "@/utils/CareHygieneDataInterface";
import { cn } from "@/utils/helpers";
import { PhoneButton } from "../Share/PhoneButton";

interface ServiceItemProps {
  service: CareHygieneService;
}

export const ServiceItem: React.FC<ServiceItemProps> = ({ service }) => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImgIndex((prev) => (prev === 0 ? 1 : 0));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id={service.id}
      className="py-10 tablet:mb-10 tablet:last-of-type:mb-[30px] desktop:mb-[100px] desktop:py-[40px] desktop:last-of-type:mb-[100px]"
    >
      <h4 className="mb-1 text-20 font-medium leading-[1.2] desktop:text-24">
        {service.title}
      </h4>
      <div className="h-[1px] w-full bg-yellow desktop:mb-[70px]"></div>
      <div className="mt-[52px] flex flex-col items-center tablet:mt-0 tablet:flex-row-reverse tablet:gap-6 desktop:justify-between desktop:gap-[80px]">
        <div className="relative h-[229px] w-full max-w-[466px] overflow-hidden rounded-radius24 desktop:h-[321px]">
          <Image
            src={service.src1}
            alt={service.alt}
            priority
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={cn(
              "absolute inset-0 object-cover transition-opacity duration-1000 ease-in-out",
              activeImgIndex === 0 ? "opacity-100" : "opacity-0",
            )}
          />
          <Image
            src={service.src2}
            alt={service.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={cn(
              "absolute inset-0 object-cover transition-opacity duration-1000 ease-in-out",
              activeImgIndex === 1 ? "opacity-100" : "opacity-0",
            )}
          />
        </div>

        <div className="mt-[52px] w-full desktop:mt-0 desktop:max-w-[700px]">
          <p className="mb-[20px] text-20 font-medium leading-[1.3]">
            {service.smallTitle}
          </p>
          <div className="mb-9 leading-normal desktop:text-18">
            <p>{service.description1}</p>
            <p>{service.description2}</p>
            <p>{service.description3}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center tablet:justify-start">
        <PhoneButton content="Umów wizytę" />
      </div>
    </div>
  );
};
