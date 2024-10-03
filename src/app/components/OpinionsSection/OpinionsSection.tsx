import Container from "../Share/Container";
import GoogleReviewCard from "../Share/GoogleReviewCard";
import { SectionHeading } from "../Share/SectionHeading";
import { Swiper } from "../Share/Swiper/Swiper";
import { OpinionsCardItem } from "./OpinionsCardItem";
import { opinionsData } from "@/app/utils/opinionsData";

export const OpinionsSection = () => {
  return (
    <section id="opinions">
      <Container>
        <div className="relative">
          <SectionHeading
            sectionTitle="Strona główna / Opinie"
            sectionMainHeading="Dołącz do grona zadowolonych klientów!"
            sectionInfo="Przykładowe recenzje naszych usług"
            variant="opinions-section"
          />
          <div className="absolute right-0 top-10">
            <GoogleReviewCard />
          </div>
        </div>
        {/* Card List Section with horizontal scrolling */}
        <Swiper arrowVisibility="largeScreen" noPaddingBottom loop>
          {opinionsData.map(({ name, opinion }, index) => (
            <OpinionsCardItem key={index} name={name} opinion={opinion} />
          ))}
        </Swiper>
      </Container>
    </section>
  );
};
