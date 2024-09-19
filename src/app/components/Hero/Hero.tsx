import Container from "../Share/Container";
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
        <div className="h-full w-full tablet:h-auto desktop:h-[920px] ">
          <div className="flex shrink flex-row place-content-between tablet:flex-start">
            <div className="flex tablet:h-auto desktop:h-[850px] flex-col place-content-between">
              <HeroInfo />
              <HeroIcons />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
