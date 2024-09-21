interface PricesTitlesProps {
  services: { name: string }[];
}

export const PricesTitles: React.FC<PricesTitlesProps> = ({ services }) => {
  return (
    <>
      {services.map((service, index) => (
        <td
          key={index}
          className={
            "h-[72px] py-[10px] pl-[20px] text-left text-[14px] font-bold"
          }
        >
          {service.name}
        </td>
      ))}
    </>
  );
};
