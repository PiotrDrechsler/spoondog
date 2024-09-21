import Image, { StaticImageData } from 'next/image';
import about from "@images/about/about1.png";


const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto p-4">
        <nav className="text-sm mb-4 mt-[70px]">
                  <a href="/" className="font-semibold text-sm leading-6 underline">powrót</a>
        </nav>

              <h3 className="font-bold text-sm leading-6 mt-[29px]">O nas // Katarzyna Bober </h3>
        <h1 className="text-center font-dm-sans font-medium text-[44px] leading-[52.8px] tracking-[-0.04em] mt-[40px] ">Katarzyna Bober</h1>
        <div className="flex justify-center mb-6">
        </div>

        <div>
                  <Image src={about as StaticImageData}
                      alt="Katarzyna Bober with dog"
                      width={1217}
                      height={600}
            className="rounded-lg mt-[100px]" />
           </div>

          <div className="font-roboto font-normal text-sm leading-6 text-left mb-[80px] mt-[100px] ">
            <h2 className='text-center font-dm-sans font-bold text-2xl leading-9 tracking-tight mb-[40px]'>O mnie</h2>
            <h3 className=' font-bold text-base leading-[27px] mb-[16px]'>Wykształcenie i doświadczenie zawodowe</h3>
            <ul className="list-disc">
              <li>Technik weterynarii: Z zawodu jestem technikiem weterynarii. Po skończeniu szkoły odbyłam roczny staż w Opolskim Schronisku dla Bezdomnych Zwierząt, gdzie zdobyłam wiedzę o psim umyśle i ich potrzebach.</li>
              <li>Zootechnika: Studiowałam zootechnikę we Wrocławiu.</li>
              <li>Dyplom groomera: Dyplom groomera otrzymałam w szkole groomingu Pani Ewy Grabowskiej.</li>
              <li>Szkolenie z medycyny behawioralnej: Uczęszczałam na szkolenie z zakresu medycyny behawioralnej psów i kotów.</li>
            </ul>

            <h3 className='font-bold text-base leading-[27px] mt-[26px] mb-[16px]'>Certyfikaty i osiągnięcia</h3>
            <ul className="list-disc">
              <li>Ambasador Blue Dog: Jestem Ambasadorem Blue Dog, którego celem jest uświadamianie dzieci i rodziców, że pies także może ugryźć.</li>
              <li>Certyfikat Emmy Pet: Posiadam certyfikat Emmy Pet, dzięki któremu dbam o higienę i zdrowy stan uzębienia naszych pupili.</li>
            </ul>


            <h2 className='text-center font-dm-sans font-bold text-2xl leading-9 tracking-tight mt-[80px] mb-[40px]'>Jak pracuję</h2>
            <h3 className=' font-bold text-base leading-[27px] mb-[16px]'>Profesjonalizm i wiedza</h3>
            <div >Wiedza, którą posiadam odnośnie pielęgnacji, żywienia i zdrowia psów, pomaga mi w <span className='font-medium'>świadczeniu usług</span> na <span className='font-medium'> najwyższym poziomie</span>. Zawsze służę <span className='font-medium'>dobrą radą i pomagam </span> na wczesnym etapie <span className='font-medium'>odkryć problemy zdrowotne </span>u naszych czworonogów.</div>

             <h3 className='font-bold text-base leading-[27px] mt-[26px] mb-[16px]'>Pasja i podejście do pracy</h3>
            <div>Psy są moją <span className='font-medium'>wielką pasją,</span> dlatego <span className='font-medium'>wkładam całe serce </span> w to, co robię. Zwierzęta to czują i dzięki temu świetnie się dogadujemy.</div>

             <h3 className='font-bold text-base leading-[27px] mt-[26px] mb-[16px]'>Indywidualne podejście do klienta</h3>
            <div>Każdy mój klient jest dla mnie <span className='font-medium'>bardzo ważny</span>, dlatego poświęcam mu odpowiednią ilość czasu, aby przekonać go do siebie i zabiegów pielęgnacyjnych - kąpieli, trymowania, strzyżenia itp. Staram się uświadomić, że <span className='font-medium'>nie robię mu krzywdy.</span> Dopiero po zaprzyjaźnieniu się przystępuję do pracy.</div>

            <h3 className='font-bold text-base leading-[27px] mt-[26px] mb-[16px]'>Metody pracy</h3>
            <div><span className='font-medium'>Nie używam leków uspakajających, poskramiaczy</span>, a podwieszki stosowane są tylko dla bezpieczeństwa psa. Staram się <span className='font-medium'>budować więź </span> polegającą na <span className='font-medium'>wzajemnym zaufaniu,</span> dzięki czemu strzyżenie nie jest dla psa zabiegiem stresującym.</div>

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