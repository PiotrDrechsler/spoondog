import Image from "next/image";
import { IconLoupe } from "@/icons/IconLoupe";
import { Clickable, ImageSource } from "@/utils/Types";
import { Watermark } from "../Share/Watermark";

interface GalleryGridItemProps extends Clickable {
  imageUrl: ImageSource;
  altText: string;
  priority: boolean;
}

export const GalleryGridItem = ({
  imageUrl,
  altText,
  priority,
  onClick,
}: GalleryGridItemProps) => {
  return (
    <li
      className="group relative aspect-square w-full cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      <Image
        src={imageUrl}
        alt={altText}
        fill
        quality={40}
        sizes="25vw"
        priority={priority}
        className="rounded object-cover desktop:rounded-3xl"
      />
      <Watermark isGalleryWatermark={false} />
      <div className="absolute inset-0 flex shrink-0 flex-col items-center justify-center space-y-0.5 rounded bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 tablet:space-y-1 desktop:space-y-2 desktop:rounded-3xl">
        <IconLoupe />
        <span className="text-center text-xs font-medium text-white tablet:text-base tablet:font-semibold desktop:text-18 desktop:font-bold">
          Zobacz zdjęcie
        </span>
      </div>
    </li>
  );
};
