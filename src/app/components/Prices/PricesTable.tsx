import Image from "next/image";
import React from "react";
import { PriceServices } from "./PricesServices";

interface PricesTableProps {
  imageSrc: string;
  title: string;
  subTitle?: string;
  services: { name: string; price: string }[];
}

export const PricesTable: React.FC<PricesTableProps> = ({
  imageSrc,
  title,
  subTitle = "", // Ustawienie pustego stringa jako domyślnej wartości
  services,
}) => {
  return (
    <div className="mx-auto mt-[12px] rounded-radius24 border-2 bg-white pt-[40px] shadow-prices-shadow  tablet:max-w-[100vw] desktop:my-0 desktop:max-w-[1340px] desktop:px-[100px]">
      <Image
        src={imageSrc}
        alt={title}
        width={100}
        height={100}
        className="mx-auto mb-[15px] rounded-radius24 desktop:h-[350px]"
        priority
      />
      <div className="text-center min-h-[80px]"> {/* Zapewnienie stałej wysokości */}
        <p className="text-[16px] font-bold leading-[1.2] desktop:text-[28px]">
          {title}
        </p>
        <p className="text-[16px] leading-[1.2] desktop:text-[28px]">
          {subTitle}
        </p>
      </div>
      <div className="">
        <PriceServices services={services} />
      </div>
    </div>
  );
};
