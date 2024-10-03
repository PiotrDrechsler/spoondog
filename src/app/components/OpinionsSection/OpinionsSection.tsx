import Container from "../Share/Container";
import GoogleReviewCard from "../Share/GoogleReviewCard";
import { SectionHeading } from "../Share/SectionHeading";
import { OpinionsCardItem } from "./OpinionsCardItem";

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
        {/* Card List Section */}
        <div className="my-[8px]">
          <OpinionsCardItem
            name="Izabella Walków"
            opinion="Pani bardzo miła z dobrym podejściem do pupili. Zawsze wychodzimy zadowoleni. Polecam"
          />
        </div>
      </Container>
    </section>
  );
};
