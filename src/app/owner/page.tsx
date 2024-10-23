import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import AboutHeading from "../../components/OwnerPage/AboutHeading";
import SubHeading from "../../components/OwnerPage/SubHeading";
import Section from "../../components/OwnerPage/Section";
import Container from "../../components/Share/Container";
import Button from "../../components/Share/Button";
import {
  educationAndExperience,
  certificatesAndAchievements,
} from "../../data/aboutContent";
import workMethodsContent from "../../data/workMethodsContent";
import about from "@images/about/about1.png";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Container>
        <main>
          <nav className="mb-4 mt-[70px] text-[16px]">
            <Link
              href="/"
              className="hidden font-semibold leading-6 underline desktop:block"
              aria-label="Wróć do strony głównej"
            >
              powrót
            </Link>
          </nav>

          <p className="mt-[80px] text-[16px] font-bold leading-6 desktop:md:mt-[29px]">
            O nas // Katarzyna Bober
          </p>
          <h1 className="mt-[40px] text-center text-[24px] font-medium leading-[28.8px] tracking-[-0.04em] desktop:text-[44px] desktop:leading-[52.8px]">
            Katarzyna Bober
          </h1>

          <div className="mb-[20px] flex justify-center">
            <Image
              src={about as StaticImageData}
              alt="Katarzyna Bober with dog"
              className="mt-[100px] h-auto w-[338px] max-w-full rounded-lg tablet:w-[602px] desktop:w-[1217px]"
              priority
            />
          </div>

          <div className="mb-[80px] mt-[100px] text-left text-sm font-normal leading-6">
            <AboutHeading>O mnie</AboutHeading>

            <SubHeading>Wykształcenie i doświadczenie zawodowe</SubHeading>
            <ul className="ml-6 list-disc">
              {educationAndExperience.map((item, index) => (
                <li key={index}>
                  {item.title}: {item.description}
                </li>
              ))}
            </ul>
            <SubHeading>Certyfikaty i osiągnięcia</SubHeading>
            <ul className="ml-6 list-disc">
              {certificatesAndAchievements.map((item, index) => (
                <li key={index}>
                  {item.title}: {item.description}
                </li>
              ))}
            </ul>
            <AboutHeading>Jak pracuję</AboutHeading>
            {workMethodsContent.map((item, index) => (
              <Section key={index} title={item.title} content={item.content} />
            ))}

            <p className="mt-[40px]">
              W Salonie Pielęgnacji Zwierząt Spoon Dog stosuję, wyłącznie
              oryginalne kosmetyki, akcesoria i narzędzia, stworzone specjalnie
              do pracy ze zwierzętami{" "}
              <span className="font-medium">firm Oster, Andis i Wahl.</span>{" "}
              Służę{" "}
              <span className="font-medium">
                poradami behawioralnymi, żywieniowymi i pielęgnacyjnymi,
              </span>{" "}
              a o zwierzętach potrafię rozmawiać godzinami.{" "}
            </p>

            <p className="mt-[40px] font-medium">
              {" "}
              Kilkuletnie doświadczenie sprawia, że możecie Państwo mi w pełni
              zaufać.{" "}
            </p>

            <p className="mt-[40px] hidden desktop:block">Zapraszam</p>
            <p className="mt-[40px] hidden desktop:block">Katarzyna Bober</p>
          </div>

          <div className="mx-auto mb-[100px] mt-[80px] block h-[44px] w-[246px] md:mt-[100px] tablet:mt-[40px]">
            <Button
              href="/hygiene-services"
              content="Zobacz nasze usługi"
              aria-label="Przejdź do strony z usługami"
            />
          </div>
        </main>
      </Container>
    </div>
  );
};

export default About;
