"use client";

import React from "react";
import { Swiper as ReactSwiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { SwiperButton } from "./SwiperButton";
import "./Swiper.css";

interface SwiperProps {
  children: React.ReactNode;
  arrowVisibility?: "always" | "largeScreen";
  slidesPerView?: number | "auto";
  spaceBetween?: number;
  breakpoints?: { [width: number]: any };
  loop?: boolean;
  className?: string;
}

export const Swiper = ({
  children,
  arrowVisibility,
  slidesPerView = 1.2,
  spaceBetween = 10,
  breakpoints,
  loop,
  className,
}: SwiperProps) => {
  return (
    <div className="relative pb-11">
      <ReactSwiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        navigation={
          arrowVisibility
            ? { nextEl: "#swiper-button-next", prevEl: "#swiper-button-prev" }
            : false
        }
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        loop={loop}
        breakpoints={
          breakpoints || {
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 40 },
          }
        }
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}

        {arrowVisibility && (
          <>
            <SwiperButton direction="prev" visibility={arrowVisibility} />
            <SwiperButton direction="next" visibility={arrowVisibility} />
          </>
        )}
      </ReactSwiper>
      <div className="swiper-pagination"></div>
    </div>
  );
};
