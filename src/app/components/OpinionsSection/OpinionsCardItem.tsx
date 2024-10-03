import { IconStars } from "@/app/icons/IconStars";

export const OpinionsCardItem = () => {
  return (
    <>
      <div className="shadow-card-shadow h-full max-w-[220px] rounded-3xl border bg-cream px-[14px] py-[20px] leading-[1.5]">
        <p className="mb-[10px] border-b font-bold">Izabella Walków</p>
        <p className="mb-[24px] text-14">
          “Pani bardzo miła z dobrym podejściem do pupili. Zawsze wychodzimy
          zadowoleni. Polecam”
        </p>
        <IconStars />
      </div>
    </>
  );
};
