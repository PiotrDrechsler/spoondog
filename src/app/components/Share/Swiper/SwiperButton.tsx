import { useSwiper } from "swiper/react";
import { cn } from "@/app/utils/helpers";
import { IconArrowRight } from "@/app/icons/IconArrowRight";
import { IconArrowLeft } from "@/app/icons/IconArrowLeft";

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
        "absolute top-1/2 z-10 flex size-14 -translate-y-1/2 transform cursor-pointer rounded-full border border-black bg-white bg-opacity-50 hover:bg-opacity-75",
        visibility === "always"
          ? "flex items-center justify-center"
          : "hidden md:flex md:items-center md:justify-center",
        direction === "next" ? "right-4" : "left-4",
      )}
      aria-label={direction === "next" ? "Następny slajd" : "Poprzedni slajd"}
      onClick={() =>
        direction === "next" ? swiper.slideNext() : swiper.slidePrev()
      }
    >
      {direction === "next" ? (
        <IconArrowRight className="size-6" />
      ) : (
        <IconArrowLeft className="size-6" />
      )}
    </button>
  );
};
