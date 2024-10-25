import { useRef } from "react";
import Link from "next/link";
import { Clickable } from "@/utils/Types";
import { HeaderSocialmedia } from "./HeaderSocialmedia";
import { LogoHeaderMobile } from "@/icons/LogoHeaderMobile";

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
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStart.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    touchEnd.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStart.current !== null && touchEnd.current !== null) {
      const diff = touchStart.current - touchEnd.current;

      if (diff > 50) {
        onClick();
      }
    }
    touchStart.current = null;
    touchEnd.current = null;
  };

  return (
  
    <div
      className="flex items-center justify-between py-[9px]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
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
