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
          <article className="px-6 py-10 desktop:px-0">
            <h4 className="desktop: text-20 font-medium capitalize leading-tight tracking-[-0.02em] desktop:text-28">
              {name}
            </h4>
            <div className="mb-9 h-[1px] w-full bg-yellow desktop:mb-[70px]"></div>
            <div className="py-4">
              <div>
                <h5 className="mb-2 text-20 font-medium tracking-[-0.02em]">
                  Kilka słów o{" "}
                  <span className="capitalize">{nameDeclension}</span>
                </h5>
                <p className="self-stretch py-4 text-16 leading-6 text-dark">
                  {description}
                </p>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
};
