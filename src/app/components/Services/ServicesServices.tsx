"use client";

import { servicesData } from "@/app/utils/servicesData";

export const ServicesServices = () => {
  const handleButtonClick = (index: number) => {
    if (index === 0) {
      window.location.href = "/care-services";
    } else {
      window.location.href = "/hygiene-services";
    }
  };

  return (
    <div className="flex flex-col gap-[20px] desktop:flex-row desktop:gap-[50px]">
      {servicesData.map((service, index) => (
        <div
          key={index}
          className="rounded-radius24 shadow-services-shadow border-greyBorders flex w-full flex-col items-center gap-[16px] border-[1px] bg-cream px-[16px] py-[28px] desktop:flex-row desktop:justify-between"
        >
          <div
            className={`h-[180px] w-[180px] bg-cover desktop:h-[223px] desktop:w-[223px] ${index === 0 ? "bg-services-dog1" : "bg-services-dog2"}`}
          ></div>
          <div className="w-full desktop:max-w-[320px]">
            <h3 className="mb-[4px] text-18 font-bold leading-[1.5] desktop:mb-[8px] desktop:text-[20px] desktop:font-medium">
              {service.title}
            </h3>
            <p className="text-greyFont text-14 leading-[1.5] desktop:text-[16px]">
              <span>{service.label1}</span>
              <span className="mx-2">•</span>
              <span>{service.label2}</span>
              <span className="mx-2">•</span>
              <span>{service.label3}</span>
            </p>
            <p className="my-[16px] text-14 leading-[1.3] desktop:mb-[34px] desktop:mt-[24px]">
              {service.description}
            </p>

            <div className="flex flex-col gap-[12px] desktop:flex-row desktop:justify-between">
              <p className="text-18 font-bold leading-[1.5] desktop:text-[24px]">
                {service.price}
              </p>
              <button
                className="h-[42px] w-[211px] rounded-full border-[1px] border-dark"
                onClick={() => handleButtonClick(index)}
              >
                Dowiedz się więcej
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
