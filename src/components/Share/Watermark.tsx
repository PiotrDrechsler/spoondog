import { LogoFooter } from "@/icons/LogoFooter";

export const Watermark = ({
  isGalleryWatermark,
}: {
  isGalleryWatermark: boolean;
}) => {
  return (
    <div
      className={
        isGalleryWatermark
          ? "absolute"
          : "absolute bottom-3 right-1 flex h-4 w-5 opacity-50 tablet:right-3 tablet:h-8 tablet:w-12"
      }
    >
      <LogoFooter isWatermark={true} isThumbnail={!isGalleryWatermark} />
    </div>
  );
};
