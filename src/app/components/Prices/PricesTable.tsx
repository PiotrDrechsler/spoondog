import React from "react";
import { PricesHead } from "./PriceHead";
import { PricesTitles } from "./PriceTitles";
import { PricesInfo } from "./PricesInfo";

interface PricesTableProps {
  servicesData: {
    imageSrc: string;
    title: string;
    subTitle?: string;
    services: { name: string; price: string }[];
  }[];
}

export const PricesTable: React.FC<PricesTableProps> = ({ servicesData }) => {
  if (!servicesData || servicesData.length === 0) {
    return <p>Brak danych do wyświetlenia.</p>;
  }

  return (
    <div className="mx-auto mt-[12px] rounded-radius24 border-2 bg-white pt-[40px] shadow-prices-shadow tablet:max-w-[100vw] desktop:my-0 desktop:max-w-[1440px] desktop:px-0">
      {/* Widok dla desktopu */}
      <div className="hidden desktop:block">
        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr>
              <th className="w-1/6 border-b-2 border-black">&nbsp;</th>
              {servicesData.map((data, index) => (
                <th
                  key={index}
                  className="w-1/6 border-b-2 border-black text-center"
                >
                  <PricesHead
                    imageSrc={data.imageSrc}
                    title={data.title}
                    subTitle={data.subTitle}
                  />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {servicesData[0].services.map((service, serviceIndex) => (
              <tr
                key={serviceIndex}
                className={serviceIndex % 2 === 0 ? "bg-[#FFF8E3]" : ""}
              >
                <PricesTitles services={[service]} />
                {servicesData.map((data, index) => (
                  <PricesInfo
                    key={index}
                    services={[data.services[serviceIndex]]}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Widok dla mobile */}
      <div className="block desktop:hidden">
        {servicesData.map((data, index) => (
          <table
            key={index}
            className="mb-4 w-full table-fixed border-collapse"
          >
            <thead>
              <tr>
                <th className="border-b-2 border-black text-center" colSpan={2}>
                  <PricesHead
                    imageSrc={data.imageSrc}
                    title={data.title}
                    subTitle={data.subTitle}
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {data.services.map((service, serviceIndex) => (
                <tr
                  key={serviceIndex}
                  className={serviceIndex % 2 === 0 ? "bg-[#FFF8E3]" : ""}
                >
                  <PricesTitles services={[service]} />
                  <PricesInfo services={[service]} />
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </div>
    </div>
  );
};
