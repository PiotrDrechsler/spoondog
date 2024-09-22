"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { swiperGalleryData } from "@/app/utils/swiperGalleryData";
import Container from "../Share/Container";
import { Swiper } from "../Share/Swiper/Swiper";
import { SwiperGalleryTitle } from "./SwiperGalleryTitle";

type SwiperGalleryImage = string | StaticImageData;

export const SwiperGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <section id="gallery" className="pb-12 pt-[70px] desktop:pt-[88px]">
      <Container>
        <SwiperGalleryTitle />
        <Swiper arrowVisibility="largeScreen" loop>
          {swiperGalleryData.map((item: SwiperGalleryImage, index: number) => (
            <div
              key={index}
              className="relative aspect-square w-full cursor-pointer"
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            >
              <Image
                src={item}
                alt={`Zdjęcie ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                placeholder="blur"
                className="rounded-lg object-cover"
              />
            </div>
          ))}
        </Swiper>
      </Container>
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={swiperGalleryData.map(
          (item: SwiperGalleryImage, index: number) => ({
            src: typeof item === "string" ? item : item.src,
            alt: `Zdjęcie ${index + 1}`,
          }),
        )}
      />
    </section>
  );
};
