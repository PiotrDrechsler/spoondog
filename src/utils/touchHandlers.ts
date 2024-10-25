import { MutableRefObject } from "react";

export const handleTouchStart = (
  event: React.TouchEvent,
  touchStartX: MutableRefObject<number | null>,
) => {
  touchStartX.current = event.touches[0].clientX;
};

export const handleTouchMove = (
  event: React.TouchEvent,
  touchEndX: MutableRefObject<number | null>,
) => {
  touchEndX.current = event.touches[0].clientX;
};

export const handleTouchEnd = (
  touchStartX: MutableRefObject<number | null>,
  touchEndX: MutableRefObject<number | null>,
  isMenuOpen: boolean,
  closeMenu: () => void,
) => {
  if (
    touchStartX.current !== null &&
    touchEndX.current !== null &&
    touchEndX.current - touchStartX.current > 50
  ) {
    if (isMenuOpen) closeMenu();
  }
  touchStartX.current = null;
  touchEndX.current = null;
};
