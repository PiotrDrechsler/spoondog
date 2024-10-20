interface PricesInfoProps {
  services: { price: string }[];
}

export const PricesInfo: React.FC<PricesInfoProps> = ({ services }) => {
  return (
    <>
      {services.map((service, index) => (
        <td
          key={index}
          className={
            "h-[72px] py-[10px] pr-[20px] text-right text-[14px] desktop:text-center"
          }
        >
          {service.price}
        </td>
      ))}
    </>
  );
};
