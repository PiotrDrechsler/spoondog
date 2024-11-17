import { LogoFooter } from "@/icons/LogoFooter";

export const Watermark = ({
  isGalleryWatermark,
}: {
  isGalleryWatermark: boolean;
}) => {
  return (
    <div
      className={`absolute opacity-50 ${isGalleryWatermark ? "bottom-5 right-5 max-w-[48px] tablet:max-w-[72px] desktop:max-w-[120px]" : "bottom-1 right-1 flex h-5 tablet:h-10 w-[26px] tablet:bottom-5 tablet:right-5 tablet:w-12 tablet:max-w-[48px]"}`}
    >
      <LogoFooter isWatermark={true} isThumbnail={!isGalleryWatermark} />
    </div>
  );
};
