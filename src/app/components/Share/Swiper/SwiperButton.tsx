import { cn } from "@/app/utils/helpers";
import { useSwiper } from "swiper/react";

interface SwiperButtonProps {
  direction: "next" | "prev";
  visibility?: "always" | "largeScreen";
}

export const SwiperButton = ({ direction, visibility }: SwiperButtonProps) => {
  const swiper = useSwiper();

  return (
    <button
      id={`swiper-button-${direction}`}
      className={cn(
        "absolute top-1/2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full border border-black bg-white bg-opacity-50 p-2 hover:bg-opacity-75",
        visibility === "always" ? "flex" : "hidden md:flex",
        direction === "next" ? "right-4" : "left-4",
      )}
      aria-label={direction === "next" ? "Następny slajd" : "Poprzedni slajd"}
      onClick={() =>
        direction === "next" ? swiper.slideNext() : swiper.slidePrev()
      }
    >
      {direction === "next" ? "→" : "←"}
    </button>
  );
};
