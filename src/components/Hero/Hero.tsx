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
        <div className="h-auto w-full tablet:h-auto desktop:mt-[140px] desktop:h-[873px] xl:h-full">
          <div className="flex-column flex">
            <div className="flex-col tablet:h-auto desktop:h-[873px]">
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
