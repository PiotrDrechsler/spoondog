import Link from "next/link";
import { Clickable } from "@/app/utils/Types";
import { HeaderSocialmedia } from "./HeaderSocialmedia";
import { LogoHeaderMobile } from "@/app/icons/LogoHeaderMobile";

interface HeaderMobileProps extends Clickable {
  iconOpen: boolean;
  svgOpen: JSX.Element;
  svgClose: JSX.Element;
}

export const HeaderMobile: React.FC<HeaderMobileProps> = ({
  onClick,
  iconOpen,
  svgOpen,
  svgClose,
}) => {
  return (
    <div className="flex items-center justify-between py-[9px]">
      <button className="flex flex-col items-center" onClick={onClick}>
        {iconOpen ? svgOpen : svgClose}
        <span className="text-12 font-bold leading-[1.5]">Menu</span>
      </button>
      <Link href="/">
        <LogoHeaderMobile />
      </Link>
      <HeaderSocialmedia />
    </div>
  );
};
