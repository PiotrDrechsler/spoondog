import { ImageSource } from "@/utils/Types";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Watermark } from "../Share/Watermark";
import Image from "next/image";

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
          <div className="relative w-full h-full">
            <Image
              src={slide.src || ""}
              alt={slide.alt || ""}
              fill
              className="rounded-lg object-contain"
            />
            <Watermark isGalleryWatermark={true}/>
          </div>
        ),
      }}
    />
  );
};
