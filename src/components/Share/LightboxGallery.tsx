import { ImageSource } from "@/utils/Types";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Watermark } from "../Share/Watermark";


interface LightboxGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  index: number;
  slides: ImageSource[];
}

export const LightboxGallery = ({
  isOpen,
  onClose,
  index,
  slides,
}: LightboxGalleryProps) => {
  return (
    <Lightbox
      open={isOpen}
      close={onClose}
      controller={{
        closeOnBackdropClick: true,
        closeOnPullDown: true,
        closeOnPullUp: true,
      }}
      index={index}
      slides={slides.map((item: ImageSource, index: number) => ({
        src: typeof item === "string" ? item : item.src,
        alt: `Zdjęcie ${index + 1}`,
      }))}
      render={{
        slide: ({ slide }) => (
          <div className="relative h-fit w-fit">
            <img
              src={slide.src || ""}
              alt={slide.alt || ""}
              className="max-h-[350px] max-w-[350px] rounded-lg object-cover tablet:max-h-[787px] tablet:max-w-[787px] desktop:max-h-[1080px] desktop:max-w-[1080px]"
            />
            <Watermark isGalleryWatermark={true} />
            </div>
        ),
      }}
    />
  );
};
