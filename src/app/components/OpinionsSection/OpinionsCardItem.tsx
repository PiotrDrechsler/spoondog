"use client";

import { useState } from "react";
import { IconStars } from "@/app/icons/IconStars";

interface OpinionsCardItemProps {
  name: string;
  opinion: string;
}

export const OpinionsCardItem: React.FC<OpinionsCardItemProps> = ({
  name,
  opinion,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const maxCharacters = 115;

  return (
    <div
      className="shadow-card-shadow my-[8px] min-h-[210px] rounded-3xl border bg-cream px-[14px] py-[20px] leading-[1.5]"
      onMouseEnter={toggleExpanded}
      onMouseLeave={toggleExpanded}
      onClick={toggleExpanded}
    >
      <p className="mb-[10px] border-b font-bold">{name}</p>
      <div
        className={`duration-7000 max-w-full overflow-hidden ease-linear ${
          isExpanded ? "max-h-[1000px]" : "max-h-[70px]"
        }`}
      >
        <p className="whitespace-normal text-14">{opinion}</p>
      </div>
      <div className="mt-[24px] flex justify-between">
        <IconStars />
        {opinion.length > maxCharacters && (
          <div className="text-14 text-yellow hover:underline">
            {isExpanded ? "Zwiń" : "Czytaj więcej"}
          </div>
        )}
      </div>
    </div>
  );
};
