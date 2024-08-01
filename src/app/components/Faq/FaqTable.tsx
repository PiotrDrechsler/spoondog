"use client";

import { useState } from "react";
import { faqData } from "@/app/utils/faqData";
import { IconArrowAbout } from "@/app/icons/IconArrowAbout";

export const FaqTable = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleOpenQuestion = (index: number | null) => () => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="rounded-radius24 bg-cream shadow-boxes-shadow border-greyBorders desktop:px-[26px] w-full border-[1px] px-[16px] pb-[40px] pt-[10px] leading-[1.5]">
      {faqData.map((item, index) => {
        if (item.type === "title") {
          return (
            <h4
              key={index}
              className="text-26 mb-[20px] mt-[30px] text-center font-medium tracking-[-0.02em]"
            >
              {item.title}
            </h4>
          );
        }

        return (
          <div
            key={index}
            className="border-b-greyLines border-b-[1px] pb-[8px] pt-[28px]"
            onClick={handleOpenQuestion(index)}
          >
            <div className="desktop:mb-[12px] group mb-[8px] flex cursor-pointer items-center justify-between">
              <p className="focus:text-violet group-hover:text-violet desktop:text-20 transition duration-300 ease-in-out">
                {item.question}
              </p>
              <div
                className={`ml-[10px] transform transition-transform duration-300 ease-in-out ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                <IconArrowAbout className="fill-dark group-hover:fill-violet focus:fill-violet transform transition-transform duration-300 ease-in-out" />
              </div>
            </div>
            <div
              className={`text-14 desktop:text-18 text-violet flex h-[0px] justify-between overflow-hidden transition duration-300 ease-in-out ${index === openIndex ? "h-full" : "h-[0px]"}`}
            >
              <p>{item.reply}</p>
              <div className="pl-[24px]"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
