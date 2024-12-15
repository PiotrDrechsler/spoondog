"use client";

import Image from "next/image";
import Container from "../Share/Container";
import { SectionHeading } from "../Share/SectionHeading";
import { Swiper } from "../Share/Swiper/Swiper";
import { Watermark } from "../Share/Watermark";
import { useLightbox } from "@/hooks/useLightbox";
import { LightboxGallery } from "../Share/LightboxGallery";

export const PetHistoryItem = ({
  name,
  description,
  nameDeclension,
  images,
}: {
  name: string;
  description: string;
  nameDeclension: string;
  images: string[];
}) => {
  const { isOpen, photoIndex, openLightbox, closeLightbox } = useLightbox();
  return (
    <section className="pb-[48px] pt-[70px] desktop:gap-[60px] desktop:pt-[88px]">
      <Container>
        <div className="flex flex-col gap-10 desktop:gap-[60px]">
          <SectionHeading
            sectionTitle="Z miłości"
            sectionMainHeading="Historie naszych zwierząt"
            className="p-5 desktop:p-0"
          />
          <article
            className="px-6 py-10 desktop:px-0"
            aria-labelledby="pet-name"
          >
            <h4
              className="desktop: text-20 font-medium capitalize leading-tight tracking-[-0.02em] desktop:text-28"
              id="pet-name"
            >
               {name === "dzeki" ? "dżeki" : name === "grazynka" ? "grażynka" : name}
            </h4>
            <div
              className="mb-9 h-[1px] w-full bg-yellow desktop:mb-[70px]"
              aria-hidden="true"
            ></div>
            <div className="flex flex-col-reverse gap-[24px] py-4 tablet:flex-row desktop:h-auto desktop:gap-[120px]">
              <div
                className="w-[100%] desktop:w-[579px]"
                aria-describedby="pet-description"
              >
                <h5 className="mb-2 text-20 font-medium tracking-[-0.02em]">
                  Kilka słów o{" "}
                  <span className="capitalize">{nameDeclension}</span>
                </h5>
                <p
                  className="self-stretch py-4 text-16 leading-6 text-dark"
                  id="pet-description"
                >
                  {description}
                </p>
              </div>
              <div
                className="w-[100%] tablet:w-[45%] desktop:w-[40%]"
                role="region"
                aria-label={`Galeria zdjęć zwierzęcia o imieniu ${name.charAt(0).toUpperCase() + name.slice(1)}`}
              >
                <Swiper
                  arrowVisibility="largeScreen"
                  loop={true}
                  aria-roledescription="gallery"
                  breakpoints={{ 320: { slidesPerView: 1, spaceBetween: 20 } }}
                >
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="relative h-[229px] w-auto cursor-pointer desktop:h-[342px]"
                      onClick={() => openLightbox(index)}
                      role="group"
                      aria-label={`Zdjęcie ${index + 1} z ${images.length}`}
                    >
                      <Image
                        src={image}
                        alt={`Zdjęcie ${index + 1} zwierzaka o imieniu ${name.charAt(0).toUpperCase() + name.slice(1)}`}
                        className="rounded-lg object-cover"
                        fill
                        priority
                        sizes="(max-width: 1439px) 332px, (min-width: 1440px) 540px"
                      />
                      <Watermark isGalleryWatermark={false} />
                    </div>
                  ))}
                </Swiper>
              </div>
            </div>
          </article>
        </div>
      </Container>
      <div role="dialog" aria-labelledby="lightbox-title" aria-hidden={!isOpen}>
        <LightboxGallery
          isOpen={isOpen}
          onClose={closeLightbox}
          index={photoIndex}
          slides={images}
        />
      </div>
    </section>
  );
};
