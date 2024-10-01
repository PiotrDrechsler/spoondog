import Container from "../Share/Container";
import { SectionHeading } from "./SectionHeading";

export const TestComponent = () => {
  return (
    <Container>
      <SectionHeading
        sectionTitle="Kontakt"
        sectionMainHeading="Skontaktuj się z nami!"
        sectionInfo={
          <>
            Zapraszamy do naszego salonu w{" "}
            <strong className="font-medium">Tułowicach</strong>.
          </>
        }
      />
    </Container>
  );
};
