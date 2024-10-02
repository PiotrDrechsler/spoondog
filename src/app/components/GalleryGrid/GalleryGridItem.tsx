import Image, { type StaticImageData } from "next/image";
import { IconLoupe } from "@/app/icons/IconLoupe";

interface GalleryGridItemProps {
  imageUrl: string | StaticImageData;
  altText: string;
  priority: boolean;
  onClick: () => void;
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
        sizes="25vw"
        placeholder="blur"
        priority={priority}
        className="rounded-s object-cover desktop:rounded-3xl"
      />
      <div className="absolute inset-0 flex shrink-0 flex-col items-center justify-center space-y-0.5 rounded-s bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 tablet:space-y-1 desktop:space-y-2 desktop:rounded-3xl">
        <IconLoupe />
        <span className="text-center text-xs font-medium text-white tablet:text-base tablet:font-semibold desktop:text-18 desktop:font-bold">
          Zobacz zdjęcie
        </span>
      </div>
    </li>
  );
};
