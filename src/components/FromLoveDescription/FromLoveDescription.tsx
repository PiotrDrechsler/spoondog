import Container from "../Share/Container";
import { SectionHeading } from "../Share/SectionHeading";
import { contentData } from '@/data/fromLoveDescriptionData';



const FromLoveDescription = () => {
  return (
    <section className="pb-[48px] pt-[70px] desktop:pt-[88px]">
      <Container>
        <SectionHeading
          sectionTitle="Poznaj historię naszych zwierząt"
          sectionMainHeading="Z miłości..."
          className="pb-6"
        />

        {/* Quote Section */}
        <blockquote className="mb-[16px] mt-[40px] text-[16px] font-semibold leading-[24px] desktop:text-18 desktop:leading-[27px] desktop:mt-[26px] desktop:text-left decoration-skip-ink-none desktop:w-2/5 ">
          &quot;{contentData.quote}&quot;
        </blockquote>

        {/* Dynamic Section Rendering */}
        {contentData.sections.map((section, index) => (
          <div key={index} className="mb-[26px]">
            {section.paragraphs.map((paragraph, idx) => (
              <>

                {index === 0 && idx === 3 && (
                  <div className="mb-[16px] mt-[40px] text-[16px] font-semibold leading-[24px] desktop:text-18 desktop:leading-[27px] desktop:mt-[26px] desktop:text-left">
                    {contentData.adoptionEncouragement}
                  </div>
                )}
                <p className="text-[16px] leading-[24px]">{paragraph}</p>
              </>
            ))}
          </div>
        ))}

        {/* Final Quote Section */}
        <blockquote className="text-[16px] font-semibold leading-[24px] desktop:text-18 desktop:leading-[27px]">
          &quot;{contentData.finalQuote}&quot;
        </blockquote>
        <span className="mb-[16px] font-normal italic">{contentData.finalAuthor}</span>

        {/* Closing Text */}
        <div className="mb-[64px] mt-[26px] text-[16px] font-semibold leading-[24px] desktop:text-18 desktop:leading-[27px]">
          <p>{contentData.closingText}</p>
          <span className="font-normal italic">{contentData.closingAuthor}</span>
        </div>
      </Container>
    </section>
  );
};

export default FromLoveDescription;

