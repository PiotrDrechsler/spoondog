import dynamic from "next/dynamic";
import { Contact } from "../components/Contact/Contact";
import { NewOffer } from "../components/NewOffer/NewOffer";
import { Services } from "../components/Services/Services";
import { Faq } from "../components/Faq/Faq";
import { Hero } from "../components/Hero/Hero";
import SalonOwner from "../components/SalonOwner/SalonOwner";
import { ClickOnMe } from "../components/ClickOnMe/ClickOnMe";
import { OpinionsSection } from "../components/OpinionsSection/OpinionsSection";

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
      <SwiperGallery />
      <ClickOnMe />
      <SwiperGallery />
      <OpinionsSection />
      <Contact />
      <Faq />
    </>
  );
}
