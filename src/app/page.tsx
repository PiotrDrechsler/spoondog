import dynamic from "next/dynamic";
import { Contact } from "../components/Contact/Contact";
import { NewOffer } from "../components/NewOffer/NewOffer";
import { Services } from "../components/Services/Services";
import { Faq } from "../components/Faq/Faq";
import { Hero } from "../components/Hero/Hero";
import SalonOwner from "../components/SalonOwner/SalonOwner";
import { ClickOnMe } from "../components/ClickOnMe/ClickOnMe";
import { OpinionsSection } from "../components/OpinionsSection/OpinionsSection";
import PetCardItem from "@/components/Share/PetCardItem";
import { petsData } from "@/data/petsData";
import { PetProps } from "@/utils/Types";

const SwiperGallery = dynamic(
  () =>
    import("../components/SwiperGallery/SwiperGallery").then(
      (mod) => mod.SwiperGallery,
    ),
  {
    ssr: false,
  },
);

export default function Home() {
  return (
    <>
      <Hero />
      <SalonOwner />
      <NewOffer />
      <Services />
      <ClickOnMe />
      <SwiperGallery />
      <OpinionsSection />
      <Contact />
      <Faq />
      {petsData.map((pet: PetProps) => (
        <PetCardItem
          key={pet.name}
          name={pet.name}
          gender={pet.gender}
          image={pet.images?.[0]}
        />
      ))}
    </>
  );
}
