import { Contact } from "./components/Contact/Contact";
import { NewOffer } from "./components/NewOffer/NewOffer";
import { Services } from "./components/Services/Services";
import { Faq } from "./components/Faq/Faq";
import { Hero } from "./components/Hero/Hero";
import  SalonOwner  from "./components/SalonOwner/SalonOwner";
import { ClickOnMe } from "./components/ClickOnMe/ClickOnMe";
import { SwiperGallery } from "./components/SwiperGallery/SwiperGallery";
import { OpinionsSection } from "./components/OpinionsSection/OpinionsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <SalonOwner />
      <NewOffer />
      <Services />
      <SwiperGallery />
      <ClickOnMe/>
      <SwiperGallery />
      <OpinionsSection />
      <Contact />
      <Faq />
    </>
  );
}
