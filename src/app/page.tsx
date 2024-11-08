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
import { petsData } from "@/data/fromLoveData";

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
  console.log(petsData.map((pet) => pet.images?.[0]));
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
      {petsData.map((pet) => (
        <PetCardItem
          key={pet.name}
          name={pet.name}
          sex={pet.sex}
          image={pet.images?.[0]}
        />
      ))}
    </>
  );
}
