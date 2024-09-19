interface PriceServicesProps {
  services: { name: string; price: string }[];
}

export const PriceServices: React.FC<PriceServicesProps> = ({ services }) => {
  return (
    <table>
      <tbody className="border-t-[1px] border-black ">
        {services.map((service, index) => (
          <tr key={index}>
            <td className=" text-[14px] font-bold leading-[1.2] py-[11px] pl-[15px] text-lef">{service.name} </td>
            <td className=" text-[14px] leading-[1.5] py-[11px] pr-[20px] text-right">{service.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
