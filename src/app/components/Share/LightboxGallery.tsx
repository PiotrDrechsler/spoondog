import { type StaticImageData } from "next/image";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface LightboxGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  index: number;
  slides: (string | StaticImageData)[];
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
      index={index}
      slides={slides.map((item: string | StaticImageData, index: number) => ({
        src: typeof item === "string" ? item : item.src,
        alt: `Zdjęcie ${index + 1}`,
      }))}
    />
  );
};
