"use client";

import { servicesData } from "@/app/utils/servicesData";
import Button from "../Share/Button";

export const ServicesServices = () => {
  return (
    <div className="desktop:flex-row desktop:gap-[50px] flex flex-col gap-[20px]">
      {servicesData.map((service, index) => (
        <div
          key={index}
          className="rounded-radius24 shadow-boxes-shadow border-greyBorders bg-cream desktop:flex-row desktop:justify-between flex w-full flex-col items-center gap-[16px] border-[1px] px-[16px] py-[28px]"
        >
          <div
            className={`desktop:h-[223px] desktop:w-[223px] h-[180px] w-[180px] bg-cover ${index === 0 ? "bg-services-dog1" : "bg-services-dog2"}`}
          ></div>
          <div className="desktop:max-w-[320px] w-full">
            <h3 className="text-18 desktop:mb-[8px] desktop:text-[20px] desktop:font-medium mb-[4px] font-bold leading-[1.5]">
              {service.title}
            </h3>
            <p className="text-greyFont text-14 desktop:text-[16px] leading-[1.5]">
              <span>{service.label1}</span>
              <span className="mx-2">•</span>
              <span>{service.label2}</span>
              <span className="mx-2">•</span>
              <span>{service.label3}</span>
            </p>
            <p className="text-14 desktop:mb-[34px] desktop:mt-[24px] my-[16px] leading-[1.3]">
              {service.description}
            </p>

            <div className="desktop:flex-row desktop:justify-between desktop:items-center flex flex-col gap-[12px]">
              <p className="text-18 desktop:text-[24px] font-bold leading-[1.5]">
                {service.price}
              </p>
              <div>
                <Button href={service.href} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
