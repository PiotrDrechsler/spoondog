import React from 'react';
import Container from "../Share/Container";
import { SectionHeading } from "../Share/SectionHeading";

const FromLoveDescription = () => {
  return (
    <section className="pb-[48px] pt-[70px] desktop:pt-[88px]">
      <Container>
        <SectionHeading
          sectionTitle="Poznaj historię naszych zwierząt"
          sectionMainHeading="Z miłości..."
          className="pb-6"
        />
        <blockquote className="mb-[16px] mt-[40px] text-[16px] font-semibold leading-[24px] desktop:text-18 desktop:leading-[27x] desktop:mt-[26px] desktop:text-left decoration-skip-ink-none desktop:w-2/5 ">
          &quot;Adoptując jednego psa, nie zmienisz całego świata... Ale cały świat zmieni się dla tego jednego psa!&quot;
        </blockquote>
        <div className="mb-[26px]">
          <p className="text-[16px] leading-[24px]">
            Dla odmiany nie hoduję psów, nie jestem zwolenniczką bezmyślnego rozmnażania, chciałabym móc zamknąć wszystkie pseudohodowle, gdzie zwierzęta doznają samych cierpień, służą za maszynki do robienia pieniędzy. Trzymane są w fatalnych warunkach, często bez kontaktu z ludźmi, rodzą dwa razy do roku, a jak są już stare i niepotrzebne, lądują w schroniskach lub giną. Szczeniaki z takich miejsc nie potrafią się odnaleźć w nowym domu, często do końca życia są zlęknione i nieufne, a nawet agresywne. Socjalizacja jest ważna od samego początku. Dlatego zachęcam do przemyślanych decyzji, kupna szczeniaków z prawdziwych hodowli, gdzie psiak posiada metryczkę. Szczególnie namawiam do adopcji, każda rasa posiada swoją fundację. Co prawda nie zawsze są to psy rasowe, często chore i po przejściach, ale swoim małym serduszkiem kochają naprawdę mocno.
          </p>
          <p className="text-[16px] leading-[24px]">
            Są wdzięczne i wierne.
          </p>
          <p className="text-[16px] leading-[24px] mb-26">
            Pamiętajmy jednak, że adopcja psa jest wspaniałym gestem dobrego człowieka, ale prze myślana adopcja jest czymś więcej, bo przejawia odpowiedzialność tego dobrego człowieka.
          </p>
        </div>

        <div className="mb-[16px] text-[16px] font-semibold leading-[24px] desktop:text-18 desktop:leading-[27x]">
          <p>
            Aby zachęcić do adopcji oferuję darmowe strzyżenie i kąpiel dla każdego psiaka, adoptowanego ze schroniska w Opolu (należy pokazać umowę adopcyjną). Każdy adoptowany psiak z różnych fundacji może liczyć na 50% rabatu na wszystkie zabiegi.
          </p>
        </div>


        <div className="mb-[26px]">
          <p className="text-[16px] leading-[24px]">
            Namawiam także do pomocy bezdomnym zwierzętom na różne sposoby. Często nie wiemy co zrobić ze starymi kocami czy pościelą, którą można zawieźć do pobliskiego schroniska, lub przynieść do mnie do salonu, a na pewno przekażę psiakom.
          </p>
          <p className="text-[16px] leading-[24px]">
            W ramach rozliczenia ofiarować 1% podatku lub raz na jakiś czas zawieźć karmę, smakołyki czy zabawki. W schroniskach przyda się wszystko. Potrzebni są także wolontariusze. Nie przechodźmy obojętnie, jeżeli widzimy cierpiące zwierzę, reagujmy jeżeli ktoś się znęca (brak wody, krótki łańcuch czy bicie psa) lub widzimy błąkającego się zwierzaka. Służby, które powinny zareagować to straż miejska i policja, jeżeli to nie poskutkuje są fundacje, które na pewno pomogą np.TOZ.
          </p>
          <p className="text-[16px] leading-[24px]">
            Jeżeli decydujesz się na psa poczytaj o rasie, która Cię interesuje, zastanów czy możesz zapewnić warunki jakich potrzebuje. Każdy pies wymaga indywidualnego traktowanie, opieki i czasu.
          </p>
          <p className="text-[16px] leading-[24px]">
            Pamiętajmy także, że żaden pies nie jest od razu idealnym kompanem trzeba go wszystkiego nauczyć co wymaga czasu i cierpliwości. Nie należy się poddawać, jeżeli nasz pies uczy się dłużej niż inne. Cierpliwość i chęć zrozumienia psa sprawi, że staniesz się jego życiem, miłością, przewodnikiem. Będzie twój, wierny i oddany do ostatniego uderzenia serca.
          </p>
        </div>

        <blockquote className="text-[16px] font-semibold leading-[24px] desktop:text-18 desktop:leading-[27px]">
          &quot;Aby właściwie nacieszyć się psem, nie wystarczy po prostu nauczyć go być prawie człowiekiem. Chodzi o to, by otworzyć się na możliwość stania się po części psem&quot;
        </blockquote>
        <span className=" mb-[16px] font-normal italic">Edward Hoagland</span>

        <div className="mb-[64px] mt-[26px] text-[16px] font-semibold leading-[24px] desktop:text-18 desktop:leading-[27x]">
          <p>
            Zawsze służę pomocą w adopcjach i problemach z nimi związanymi. Pomogę każdemu kto chce pomóc naszym mniejszym braciom. Bo dla mnie praca ze zwierzętami to przyjemność, stać mnie na bezinteresowność i życzę tego każdemu.
          </p>
          <span className="font-normal italic">Katarzyna Bober</span>
        </div>
      </Container>
    </section>
  );
}


export default FromLoveDescription;
