import Link from "next/link";
import Container from "../Share/Container";
import { HeaderNavigation } from "./HeaderNavigation";
import { HeaderSocialmedia } from "./HeaderSocialmedia";
import { PhoneButton } from "../Share/PhoneButton";
import { LogoHeaderDesktop } from "@/app/icons/LogoHeaderDesktop";

export const HeaderDesktop = () => {
  return (
    <Container>
      <div className="flex items-center justify-between py-[8px]">
        <Link href="/">
          <LogoHeaderDesktop />
        </Link>
        <div className="flex items-center gap-[64px]">
          <HeaderNavigation />
          <HeaderSocialmedia />
          <PhoneButton content="+48 692 394 385" />
        </div>
      </div>
    </Container>
  );
};
