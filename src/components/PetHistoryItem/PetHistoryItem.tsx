import { SwiperSlide } from "swiper/react";
import Container from "../Share/Container";
import { SectionHeading } from "../Share/SectionHeading";
import { Swiper } from "../Share/Swiper/Swiper";
import Image from "next/image";

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
  return (
    <section className="pb-[48px] pt-[70px] desktop:gap-[60px] desktop:pt-[88px]">
      <Container>
        <div className="flex flex-col gap-10 desktop:gap-[60px]">
          <SectionHeading
            sectionTitle="Z miłości"
            sectionMainHeading="Historie naszych zwierząt"
            className="p-5 desktop:p-0"
          />
          <article className="px-6 py-10 desktop:px-0">
            <h4 className="desktop: text-20 font-medium capitalize leading-tight tracking-[-0.02em] desktop:text-28">
              {name}
            </h4>
            <div className="mb-9 h-[1px] w-full bg-yellow desktop:mb-[70px]"></div>
            <div className="flex py-4 desktop:flex-row">
              <div>
                <h5 className="mb-2 text-20 font-medium tracking-[-0.02em]">
                  Kilka słów o{" "}
                  <span className="capitalize">{nameDeclension}</span>
                </h5>
                <p className="self-stretch py-4 text-16 leading-6 text-dark">
                  {description}
                </p>
              </div>
              <div className="w-[540px]">
                <Swiper
                  arrowVisibility="largeScreen"
                  loop={true}
                  slidesPerView={1}
                  spaceBetween={0}
                >
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="relative h-[342px] w-[540px] cursor-pointer"
                    >
                      <Image
                        src={image}
                        alt={`Zdjęcie ${index + 1} zwierzaka o imieniu ${name}`}
                        className="rounded-lg object-cover"
                        fill
                        priority
                        sizes="(max-width: 1439px) 342px, (min-width: 1440px) 540px"
                      />
                    </div>
                  ))}
                </Swiper>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
};
