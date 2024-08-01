import { Contact } from "./components/Contact/Contact";
import { NewOffer } from "./components/NewOffer/NewOffer";
import { Services } from "./components/Services/Services";
import { Faq } from "./components/Faq/Faq";

export default function Home() {
  return (
    <>
      <NewOffer />
      <Services />
      <Contact />
      <Faq />
    </>
  );
}
