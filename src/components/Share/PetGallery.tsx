import PetCardItem from "./PetCardItem";
import { petsData } from "@/data/petsData";
import { Swiper } from "./Swiper/Swiper";
import Container from "./Container";
import { SectionHeading } from "./SectionHeading";

export const PetGallery = () => {
  return (
    <section className="py-[48px]">
      <Container>
        <div className="py-[48px] tablet:py-0">
          <SectionHeading
            sectionMainHeading="Poznaj historię moich zwierząt"
            sectionTitle="Moje zwierzęta"
            className="mb-[64px]"
          />
          <Swiper
            arrowVisibility="largeScreen"
            loop={true}
            aria-roledescription="gallery"
            breakpoints={{
              320: { slidesPerView: 1.5, spaceBetween: 20 },
              835: { slidesPerView: 3.5, spaceBetween: 20 },
              1440: { slidesPerView: 5, spaceBetween: 40 },
            }}
          >
            {petsData.map((pet, index) => (
              <PetCardItem
                key={index}
                name={
                  pet.name === "dzeki"
                    ? "Dżeki"
                    : pet.name === "grazynka"
                      ? "Grażynka"
                      : pet.name.charAt(0).toUpperCase() + pet.name.slice(1)
                }
                gender={pet.gender}
                image={pet.images[0]}
                href={`/fromlove/${pet.name}`}
              />
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};
