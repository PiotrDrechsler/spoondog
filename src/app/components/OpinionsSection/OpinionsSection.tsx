import Container from "../Share/Container";
import { SectionHeading } from "../Share/SectionHeading";
import { IconGoogle } from "@/app/icons/IconGoogle";

export const OpinionsSection = () => {
  return (
    <section id="opinions" className="pb-[48px] pt-[70px] desktop:pt-[88px]">
      <Container>
        <div className="relative">
          <SectionHeading
            sectionTitle="Strona główna / Opinie"
            sectionMainHeading="Dołącz do grona zadowolonych klientów!"
            sectionInfo="Przykładowe recenzje naszych usług"
            variant="opinions-section"
          />
          <div className="absolute right-0 top-10">
            <div className="shadow-google-shadow font-jakarta flex h-[81px] w-[85px] flex-col items-center justify-between rounded-md bg-white p-[4px] text-[#6A6A6A]">
              <p className="text-16 font-bold">Google</p>
              <p className="text-12">Opinie</p>
              <IconGoogle className="m-[5px] size-8" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
