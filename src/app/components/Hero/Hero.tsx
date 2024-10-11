import Container from "../Share/Container";
import { HeroButtonBox } from "./HeroButtonBox";
import { HeroIcons } from "./HeroIcons";
import { HeroImg } from "./HeroImg";
import { HeroInfo } from "./HeroInfo";

export const Hero = () => {
  return (
    <section id="hero">
      <div className="block">
        <HeroImg />
      </div>
      <Container>
        <div className="h-[900px] w-full tablet:h-auto desktop:h-[873px]">
          <div className="flex flex-column place-content-between tablet:flex-start">
            <div className="flex tablet:h-auto desktop:h-[850px] flex-col place-content-between">
              <HeroInfo />
              <div className="block tablet:hidden desktop:block">
              <HeroIcons />
              </div>
            </div>
          </div>
          <div className="hidden tablet:block desktop:hidden">
            <HeroButtonBox />
            <HeroIcons />
          </div>
        </div>
      </Container>
    </section>
  );
};
