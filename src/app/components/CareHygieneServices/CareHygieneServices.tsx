"use client";

import Container from "../Share/Container";
import { CareHygieneServicesTitle } from "./CareHygieneServicesTitle";
import { useEffect, useState } from "react";
import { PhoneButton } from "../Share/PhoneButton";
import { CareHygieneService } from "@/app/utils/CareHygieneDataInterface";

interface CareHygieneServicesProps {
  data: CareHygieneService[];
  title: string;
  subtitle: string;
  subtitleBold: string;
}

export const CareHygieneServices: React.FC<CareHygieneServicesProps> = ({
  data,
  title,
  subtitle,
  subtitleBold,
}) => {
  const [activePicture, setActivePicture] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePicture((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pb-[5px] pt-[60px] desktop:pt-[120px]">
      <Container>
        <CareHygieneServicesTitle
          title={title}
          subtitle={subtitle}
          subtitleBold={subtitleBold}
        />
        {data.map((service, index) => (
          <div
            key={index}
            id={service.id}
            className="py-10 desktop:mt-[100px] desktop:py-[40px]"
          >
            <h4 className="mb-[4px] text-20 font-medium leading-[1.2] desktop:text-24">
              {service.title}
            </h4>
            <div className="h-[1px] w-full bg-yellow desktop:mb-[0px]"></div>
            <div className="mt-[52px] flex flex-col items-center desktop:mt-[48px] desktop:flex-row-reverse desktop:justify-between">
              <div className="relative h-[229px] w-full max-w-[466px] overflow-hidden rounded-radius24 desktop:h-[321px]">
                {/* eslint-disable @next/next/no-img-element */}
                <img
                  src={service.src1}
                  alt={service.alt}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${activePicture ? "opacity-100" : "opacity-0"}`}
                />
                <img
                  src={service.src2}
                  alt={service.alt}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${activePicture ? "opacity-0" : "opacity-100"}`}
                />
                {/* eslint-enable @next/next/no-img-element */}
              </div>

              <div className="mt-[52px] w-full desktop:mt-[0px] desktop:max-w-[700px]">
                <p className="mb-[20px] text-20 font-medium leading-[1.3]">
                  {service.smallTitle}
                </p>
                <div className="mb-[36px] leading-[1.5] desktop:text-18">
                  <p>{service.description1}</p>
                  <p>{service.description2}</p>
                  <p>{service.description3}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <PhoneButton content="Umów wizytę" />
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
