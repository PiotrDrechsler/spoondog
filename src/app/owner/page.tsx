import Image, { StaticImageData } from 'next/image';
import about from "@images/about/about1.png";
import AboutHeading from './AboutHeading'; 
import SubHeading from './SubHeading';
import Section from './Section';
import workMethodsContent from '../utils/workMethodsContent';
import { educationAndExperience, certificatesAndAchievements } from '../utils/aboutContent';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto p-4">
        <nav className="text-[16px] mb-4 mt-[70px]">
          <a href="/" className="font-semibold leading-6 underline" aria-label="Wróć do strony głównej">powrót</a>
        </nav>

        <p className="font-bold text-sm leading-6 mt-[29px]">O nas // Katarzyna Bober</p>
        <h1 className="text-center font-dm-sans font-medium text-[44px] leading-[52.8px] tracking-[-0.04em] mt-[40px]">Katarzyna Bober</h1>

        <div className="flex justify-center mb-[20px]">
          <Image
            src={about as StaticImageData}
            alt="Katarzyna Bober with dog"
            width={1217}
            height={600}
            className="rounded-lg mt-[100px] max-w-full"
            priority
          />
        </div>

        <div className="font-roboto font-normal text-sm leading-6 text-left mb-[80px] mt-[100px]">
          <AboutHeading>O mnie</AboutHeading> 
    
          <SubHeading>Wykształcenie i doświadczenie zawodowe</SubHeading>
          <ul className="list-disc">
            {educationAndExperience.map((item, index) => (
             <li key={index}>
                {item.title}: {item.description}
              </li>
            ))}
          </ul>
          <SubHeading>Certyfikaty i osiągnięcia</SubHeading>
          <ul className="list-disc">
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

          <div className='mt-[40px]'>W Salonie Pielęgnacji Zwierząt Spoon Dog stosuję, wyłącznie oryginalne kosmetyki, akcesoria i narzędzia, stworzone specjalnie do pracy ze zwierzętami <span className='font-medium'>firm Oster, Andis i Wahl.</span> Służę  <span className='font-medium'>poradami behawioralnymi, żywieniowymi i pielęgnacyjnymi,</span> a o zwierzętach potrafię rozmawiać godzinami.</div>
            
          <div className='font-medium mt-[40px]'> Kilkuletnie doświadczenie sprawia, że możecie Państwo mi w pełni zaufać. </div>
          
          <p className='mt-[40px]'>Zapraszam</p>
          <p className='mt-[40px]'>Katarzyna Bober</p>

           </div>
            BUTTON
         
       

      </main>
    </div>
  );
};

export default About;