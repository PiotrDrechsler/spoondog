import Container from "../Share/Container";
import { SectionHeading } from "./SectionHeading";

export const TestComponent = () => {
  return (
    <section id="test">
      <Container>
        <SectionHeading
          sectionTitle="Kontakt"
          sectionMainHeading="Skontaktuj się z nami!"
          sectionInfo="Zapraszamy do naszego salonu w Tułowicach."
        />
      </Container>
    </section>
  );
};
