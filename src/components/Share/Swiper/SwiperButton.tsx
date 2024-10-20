import { useSwiper } from "swiper/react";
import { cn } from "@/utils/helpers";
import { IconNext } from "@/icons/IconNext";

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
        "absolute top-1/2 z-10 flex -translate-y-1/2 cursor-pointer items-center justify-center hover:opacity-70",
        visibility === "always" ? "flex" : "hidden desktop:flex",
        direction === "next" ? "-right-24" : "-left-24",
      )}
      aria-label={direction === "next" ? "Następny slajd" : "Poprzedni slajd"}
      onClick={() =>
        direction === "next" ? swiper.slideNext() : swiper.slidePrev()
      }
    >
      <IconNext
        className={cn(
          "size-28 fill-yellow",
          direction === "prev" && "rotate-180",
        )}
      />
    </button>
  );
};
