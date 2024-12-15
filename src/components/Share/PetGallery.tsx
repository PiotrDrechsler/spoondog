import PetCardItem from "./PetCardItem";
import { petsData } from "@/data/petsData";
import { Swiper } from "./Swiper/Swiper";
import Container from "./Container";
import { SectionHeading } from "./SectionHeading";

export const PetGallery = () => {
  return (
    <section id="fromlove" className="pt-[100px]">
      <Container>
        <SectionHeading
          sectionMainHeading="Poznaj historię naszych zwierząt"
          sectionTitle="Z miłości"
          className="mb-[64px]"
        />
        <Swiper
          arrowVisibility="always"
          loop={true}
          aria-roledescription="gallery"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            640: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 5, spaceBetween: 40 },
          }}
        >
          {petsData.map((pet, index) => (
            <PetCardItem
              key={index}
              name={pet.name}
              gender={pet.gender}
              image={pet.images[0]}
              href={`/fromlove/${pet.name}`}
            />
          ))}
        </Swiper>
      </Container>
    </section>
  );
};
