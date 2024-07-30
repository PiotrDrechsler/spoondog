import { ServicesTitle } from "./ServicesTitle";
import Container from "../Share/Container";
import { ServicesServices } from "./ServicesServices";

export const Services = () => {
  return (
    <section className="pb-[48px] pt-[70px] desktop:pt-[88px]">
      <Container>
        <ServicesTitle />
        <ServicesServices />
      </Container>
    </section>
  );
};
