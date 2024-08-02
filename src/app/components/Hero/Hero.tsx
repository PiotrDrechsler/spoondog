import Container from "../Share/Container";
import { HeroIcons } from "./HeroIcons";
import { HeroImg } from "./HeroImg";
import { HeroInfo } from "./HeroInfo";

export const Hero = () => {
  return (
    <section id="hero">
      <Container>
        <div className="h-full w-full desktop:h-[850px]">
          <div className="flex flex-col desktop:flex-row desktop:place-content-between">
            <div className="block desktop:hidden">
              <HeroImg />
            </div>
            <div className="desktop:flex desktop:h-[850px] desktop:flex-col desktop:place-content-between">
              <HeroInfo />
              <HeroIcons />
            </div>

            <div className="hidden desktop:block">
              <HeroImg />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
