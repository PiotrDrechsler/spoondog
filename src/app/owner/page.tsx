import Image, { StaticImageData } from 'next/image';
import about from "@images/about/about1.png";
import AboutHeading from '../components/OwnerPage/AboutHeading';
import SubHeading from '../components/OwnerPage/SubHeading';
import Section from '../components/OwnerPage/Section';
import workMethodsContent from '../utils/workMethodsContent';
import { educationAndExperience, certificatesAndAchievements } from '../utils/aboutContent';
import Container from '../components/Share/Container';
import Button from '../components/Share/Button';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Container>
        <main>
          <nav className="text-[16px] mb-4 mt-[70px]">
            <a href="/" className="font-semibold leading-6 underline hidden tablet:block" aria-label="Wróć do strony głównej">powrót</a>
          </nav>

          <p className="font-bold text-[16px] leading-6 mt-[80px] md:mt-[29px]">O nas // Katarzyna Bober</p>
          <h1 className="text-center font-dm-sans font-medium text-[44px] leading-[52.8px] tracking-[-0.04em] mt-[40px]">Katarzyna Bober</h1>

          <div className="flex justify-center mb-[20px]">
            <Image src={about as StaticImageData}
              alt="Katarzyna Bober with dog"
              className="mt-[100px] h-auto w-[338px] max-w-full rounded-lg tablet:w-[602px] desktop:w-[1217px]"
              priority />
          </div>

          <div className="font-normal text-sm leading-6 text-left mb-[80px] mt-[100px]">
            <AboutHeading>O mnie</AboutHeading>

            <SubHeading>Wykształcenie i doświadczenie zawodowe</SubHeading>
            <ul className="list-disc ml-6">
              {educationAndExperience.map((item, index) => (
                <li key={index}>
                  {item.title}: {item.description}
                </li>
              ))}
            </ul>
            <SubHeading>Certyfikaty i osiągnięcia</SubHeading>
            <ul className="list-disc ml-6">
              {certificatesAndAchievements.map((item, index) => (
                <li key={index}>
                  {item.title}: {item.description}
                </li>
              ))}
            </ul>
            <AboutHeading>Jak pracuję</AboutHeading>
            {workMethodsContent.map((item, index) => (
              <Section
                key={index}
                title={item.title}
                content={item.content}
              />
            ))}

            <p className='mt-[40px]'>W Salonie Pielęgnacji Zwierząt Spoon Dog stosuję, wyłącznie oryginalne kosmetyki, akcesoria i narzędzia, stworzone specjalnie do pracy ze zwierzętami <span className='font-medium'>firm Oster, Andis i Wahl.</span> Służę  <span className='font-medium'>poradami behawioralnymi, żywieniowymi i pielęgnacyjnymi,</span> a o zwierzętach potrafię rozmawiać godzinami. </p>

            <p className='font-medium mt-[40px]'> Kilkuletnie doświadczenie sprawia, że możecie Państwo mi w pełni zaufać. </p>

            <p className='hidden desktop:block mt-[40px]'>Zapraszam</p>
            <p className='hidden desktop:block mt-[40px]'>Katarzyna Bober</p>

          </div>

          <div className="block w-[246px] h-[44px] 
                        mt-[80px] 
                        mb-[100px]
                        md:mt-[100px] 
                        tablet:mt-[40px] 
                        mx-auto">
            <Button
              href="/hygiene-service"
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