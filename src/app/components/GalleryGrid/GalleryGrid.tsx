"use client";

import { type StaticImageData } from "next/image";
import { useLightbox } from "@/app/hooks/useLightbox";
import { galleryGridData } from "@/app/utils/galleryGridData";
import Container from "../Share/Container";
import { LightboxGallery } from "../Share/LightboxGallery";
import { GalleryGridItem } from "./GalleryGridItem";
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
          {galleryGridData.map((item: StaticImageData, index: number) => (
            <GalleryGridItem
              key={index}
              imageUrl={item}
              altText={`gallery image ${index + 1}`}
              priority={index < 4}
              onClick={() => openLightbox(index)}
            />
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
