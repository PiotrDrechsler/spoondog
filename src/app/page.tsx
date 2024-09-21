import { Contact } from "./components/Contact/Contact";
import { NewOffer } from "./components/NewOffer/NewOffer";
import { Services } from "./components/Services/Services";
import { Faq } from "./components/Faq/Faq";
import { Hero } from "./components/Hero/Hero";
import { Prices } from "./components/Prices/Prices";
import  SalonOwner  from "./components/SalonOwner/SalonOwner";


export default function Home() {
  return (
    <>
      <Hero />
      <SalonOwner />
      <NewOffer />
      <Services />
      <Prices />
      <Contact />
      <Faq />
    </>
  );
}
