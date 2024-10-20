import Image from "next/image";
import servicesDogclick from "@images/servicesDogclick.png";

export const ClickOnMeImg = () => {
  return (
    <div>
      <div className="w-[360px] h-[765px] flex-shrink-0">
        <Image
          src={servicesDogclick}
          alt="Dog image"
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
};
