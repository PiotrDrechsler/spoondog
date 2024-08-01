import { Contact } from "./components/Contact/Contact";
import { Services } from "./components/Services/Services";
import { Faq } from "./components/Faq/Faq";

export default function Home() {
  return (
    <>
      <Services />
      <Contact />
      <Faq />
    </>
  );
}
