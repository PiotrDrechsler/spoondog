import { Contact } from "./components/Contact/Contact";
import { NewOffer } from "./components/NewOffer/NewOffer";
import { Services } from "./components/Services/Services";
import { Faq } from "./components/Faq/Faq";
import { Hero } from "./components/Hero/Hero";
import  SalonOwner  from "./components/SalonOwner/SalonOwner";
import { ClickOnMe } from "./components/ClickOnMe/ClickOnMe";
import { SwiperGallery } from "./components/SwiperGallery/SwiperGallery";

export default function Home() {
  return (
    <>
      <Hero />
      <SalonOwner />
      <NewOffer />
      <Services />
      <ClickOnMe/>
      <SwiperGallery />
      <Contact />
      <Faq />
    </>
  );
}
