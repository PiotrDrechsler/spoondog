"use client";

import Image from "next/image";
import { useLightbox } from "@/app/hooks/useLightbox";
import { IconLoupe } from "@/app/icons/IconLoupe";
import { galleryGridData } from "@/app/utils/galleryGridData";
import Container from "../Share/Container";
import { LightboxGallery } from "../Share/LightboxGallery";
import { GalleryGridTitle } from "./GalleryGridTitle";

export const GalleryGrid = () => {
  const { isOpen, photoIndex, openLightbox, closeLightbox } = useLightbox();

  return (
    <section
      id="gallery-grid"
      className="pb-10 pt-[100px] desktop:pb-[140px] desktop:pt-[220px]"
    >
      <GalleryGridTitle />
      <Container>
        <ul className="grid grid-cols-4 gap-x-2.5 gap-y-3 desktop:gap-x-5 desktop:gap-y-[60px]">
          {galleryGridData.map((item, index) => (
            <li key={index}>
              <div
                className="group relative aspect-square w-full cursor-pointer overflow-hidden"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={item}
                  alt={`gallery image ${index + 1}`}
                  fill
                  sizes="25vw"
                  priority={index < 4}
                  className="rounded-s object-cover desktop:rounded-3xl"
                />
                <div className="absolute inset-0 flex shrink-0 flex-col items-center justify-center space-y-0.5 rounded-s bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 tablet:space-y-1 desktop:space-y-2 desktop:rounded-3xl">
                  <IconLoupe />
                  <span className="text-center text-xs font-medium text-white tablet:text-base tablet:font-semibold desktop:text-18 desktop:font-bold">
                    Zobacz zdjęcie
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
      <LightboxGallery
        isOpen={isOpen}
        onClose={closeLightbox}
        index={photoIndex}
        slides={galleryGridData}
      />
    </section>
  );
};
