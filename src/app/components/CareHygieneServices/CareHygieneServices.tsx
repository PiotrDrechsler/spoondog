"use client";

import Container from "../Share/Container";
import { CareHygieneServicesTitle } from "./CareHygieneServicesTitle";
import { useEffect, useState } from "react";
import { PhoneButton } from "../Share/PhoneButton";
import { CareHygieneService } from "@/app/utils/CareHygieneDataInterface";
import { ServiceTitleProps } from "@/app/utils/Types";
import { cn } from "@/app/utils/helpers";

interface CareHygieneServicesProps extends ServiceTitleProps {
  data: CareHygieneService[];
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
    <section className="pb-[5px] pt-[60px] desktop:pt-[64px]">
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
            className="py-10 tablet:mb-10 tablet:last-of-type:mb-[30px] desktop:mb-[100px] desktop:py-[40px] desktop:last-of-type:mb-[100px]"
          >
            <h4 className="mb-[4px] text-20 font-medium leading-[1.2] desktop:text-24">
              {service.title}
            </h4>
            <div className="h-[1px] w-full bg-yellow desktop:mb-[70px]"></div>
            <div className="mt-[52px] flex flex-col items-center tablet:mt-0 tablet:flex-row-reverse tablet:gap-6 desktop:justify-between desktop:gap-[80px]">
              <div className="relative h-[229px] w-full max-w-[466px] overflow-hidden rounded-radius24 desktop:h-[321px]">
                {/* eslint-disable @next/next/no-img-element */}
                <img
                  src={service.src1}
                  alt={service.alt}
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out",
                    {
                      "opacity-100": activePicture,
                      "opacity-0": !activePicture,
                    },
                  )}
                />
                <img
                  src={service.src2}
                  alt={service.alt}
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out",
                    {
                      "opacity-0": activePicture,
                      "opacity-100": !activePicture,
                    },
                  )}
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
            <div className="flex justify-center tablet:justify-start">
              <PhoneButton content="Umów wizytę" />
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
