import Container from "../Share/Container";
import { SectionHeading } from "../Share/SectionHeading";

export const PetHistoryItem = ({
  name,
  description,
  nameDeclension,
}: {
  name: string;
  description: string;
  nameDeclension: string;
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
          <article>
            <h4 className="text-20 font-medium capitalize desktop:text-28">
              {name}
            </h4>
            <div className="h-[1px] w-full bg-yellow desktop:mb-[70px]"></div>
            <div>
              <h5>
                Kilka słów o{" "}
                <span className="capitalize">{nameDeclension}</span>
              </h5>
              <p>{description}</p>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
};
