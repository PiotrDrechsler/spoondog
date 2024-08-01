import Container from "../Share/Container";
import { FaqTitle } from "./FaqTitle";
import { FaqTable } from "./FaqTable";

export const Faq = () => {
  return (
    <section id="faq" className="desktop:pt-[88px] pb-[48px] pt-[70px]">
      <Container>
        <FaqTitle />
        <FaqTable />
      </Container>
    </section>
  );
};
