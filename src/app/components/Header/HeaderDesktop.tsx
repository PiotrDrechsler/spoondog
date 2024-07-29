import Container from "../Share/Container";
import { HeaderNavigation } from "./HeaderNavigation";
import { HeaderSocialmedia } from "./HeaderSocialmedia";
import { HeaderPhone } from "./HeaderPhone";
import { LogoHeaderDesktop } from "@/app/icons/LogoHeaderDesktop";

export const HeaderDesktop = () => {
  return (
    <Container>
      <div className="flex items-center justify-between py-[8px]">
        <a href="/">
          <LogoHeaderDesktop />
        </a>
        <div className="flex items-center gap-[64px]">
          <HeaderNavigation />
          <HeaderSocialmedia />
          <HeaderPhone />
        </div>
      </div>
    </Container>
  );
};
