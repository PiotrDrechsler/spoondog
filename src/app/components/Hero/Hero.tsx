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
        <div className="h-auto w-full tablet:h-auto desktop:h-[873px] desktop:mt-[140px] xl:h-full">
          <div className="flex flex-column">
            <div className="tablet:h-auto desktop:h-[873px] flex-col">
              <HeroInfo />
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
