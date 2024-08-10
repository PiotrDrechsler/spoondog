"use client";

import { servicesData } from "@/app/utils/servicesData";
import Button from "../Share/Button";

export const ServicesServices = () => {
  return (
    <div className="flex flex-col gap-[20px] desktop:flex-row desktop:gap-[50px]">
      {servicesData.map((service, index) => (
        <div
          key={index}
          className="flex w-full flex-col items-center gap-[16px] rounded-radius24 border-[1px] border-greyBorders bg-cream px-[16px] py-[28px] shadow-boxes-shadow desktop:flex-row"
        >
          <div
            className={`h-[180px] w-[180px] bg-cover desktop:h-[223px] desktop:w-[223px] ${index === 0 ? "bg-services-dog1" : "bg-services-dog2"}`}
          ></div>
          <div className="w-full desktop:max-w-[344px]">
            <h3 className="mb-[4px] text-18 font-bold leading-[1.5] desktop:mb-[8px] desktop:text-[20px] desktop:font-medium">
              {service.title}
            </h3>
            <p className="flex flex-wrap text-14 leading-[1.5] text-greyFont desktop:text-16">
              <span>{service.label1}</span>
              <span className="mx-2">•</span>
              <span>{service.label2}</span>
              <span className="mx-2">•</span>
              <span>{service.label3}</span>
            </p>
            <p className="my-[16px] text-14 leading-[1.3] desktop:mb-[34px] desktop:mt-[24px]">
              {service.description}
            </p>

            <div className="flex flex-col gap-[12px] desktop:flex-row desktop:items-center">
              <p className="whitespace-nowrap text-18 font-bold leading-[1.5] desktop:text-[24px]">
                {service.price}
              </p>
              <div className="h-[46px] w-full max-w-[210px] desktop:max-w-[240px]">
                <Button href={service.href} content="Dowiedz się więcej" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
