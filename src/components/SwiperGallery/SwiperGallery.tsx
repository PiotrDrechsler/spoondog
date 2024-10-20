"use client";

import Image from "next/image";
import { swiperGalleryData } from "@/utils/swiperGalleryData";
import Container from "../Share/Container";
import { Swiper } from "../Share/Swiper/Swiper";
import { SwiperGalleryTitle } from "./SwiperGalleryTitle";
import { useLightbox } from "@/hooks/useLightbox";
import { LightboxGallery } from "../Share/LightboxGallery";
import { ImageSource } from "@/utils/Types";

export const SwiperGallery = () => {
  const { isOpen, photoIndex, openLightbox, closeLightbox } = useLightbox();

  return (
    <section id="gallery" className="pb-12 pt-[70px] desktop:pt-[88px]">
      <Container>
        <SwiperGalleryTitle />
        <Swiper arrowVisibility="largeScreen" loop>
          {swiperGalleryData.map((item: ImageSource, index: number) => (
            <div
              key={index}
              className="relative aspect-square w-full cursor-pointer"
              onClick={() => openLightbox(index)}
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
      <LightboxGallery
        isOpen={isOpen}
        onClose={closeLightbox}
        index={photoIndex}
        slides={swiperGalleryData}
      />
    </section>
  );
};
