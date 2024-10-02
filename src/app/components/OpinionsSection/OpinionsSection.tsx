import Container from "../Share/Container";
import { SectionHeading } from "../Share/SectionHeading";

export const OpinionsSection = () => {
  return (
    <section id="opinions" className="pb-[48px] pt-[70px] desktop:pt-[88px]">
      <Container>
        <div className="relative">
          <SectionHeading
            sectionTitle="Strona główna / Opinie"
            sectionMainHeading="Dołącz do grona zadowolonych klientów!"
            sectionInfo="Przykładowe recenzje naszych usług"
          />

          <div className="shadow-google-shadow absolute right-2 top-10 flex h-[64px] w-[67px] flex-col items-center rounded-md bg-white p-[9px]">
            <p className="text-[10px]">GOOGLE</p>
            <p className="text-[5px]">opinie</p>
            <p>logo</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
