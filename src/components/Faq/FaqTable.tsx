"use client";

import { useState } from "react";
import { faqData } from "@/utils/faqData";
import { IconArrowAbout } from "@/icons/IconArrowAbout";

export const FaqTable = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleOpenQuestion = (index: number | null) => () => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full rounded-radius24 border-[1px] border-greyBorders bg-cream px-[16px] pb-[40px] pt-[10px] leading-[1.5] shadow-boxes-shadow desktop:px-[26px]">
      {faqData.map((item, index) => {
        if (item.type === "title") {
          return (
            <h4
              key={index}
              className="mb-[20px] mt-[30px] text-center text-26 font-medium tracking-[-0.02em]"
            >
              {item.title}
            </h4>
          );
        }

        return (
          <div
            key={index}
            className="border-b-[1px] border-b-greyLines pb-[8px] pt-[28px]"
            onClick={handleOpenQuestion(index)}
          >
            <div className="group mb-[8px] flex cursor-pointer items-center justify-between desktop:mb-[12px]">
              <p className="transition duration-300 ease-in-out focus:text-violet group-hover:text-violet desktop:text-20">
                {item.question}
              </p>
              <div
                className={`ml-[10px] transform transition-transform duration-300 ease-in-out ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                <IconArrowAbout className="transform fill-dark transition-transform duration-300 ease-in-out focus:fill-violet group-hover:fill-violet" />
              </div>
            </div>
            <div
              className={`transition-max-height flex max-h-0 overflow-hidden text-14 text-violet duration-500 ease-in-out desktop:text-18 ${
                index === openIndex ? "max-h-[500px]" : "max-h-0"
              }`}
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
