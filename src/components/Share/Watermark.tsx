import { LogoFooter } from "@/icons/LogoFooter";

export const Watermark = ({ isGalleryWatermark }: { isGalleryWatermark: boolean }) => {
  return (
    <div className={isGalleryWatermark? "absolute" :"flex absolute bottom-5 right-5 opacity-30 w-12 h-12"}>
      <LogoFooter isWatermark={true} />
    </div>
  );
};
