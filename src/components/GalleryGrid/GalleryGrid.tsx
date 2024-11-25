"use client";

import { useState } from "react";
import { useLightbox } from "@/hooks/useLightbox";
import { galleryGridData } from "@/data/galleryGridData";
import Container from "../Share/Container";
import { LightboxGallery } from "../Share/LightboxGallery";
import { GalleryGridItem } from "./GalleryGridItem";
import { GalleryGridTitle } from "./GalleryGridTitle";

const ITEMS_PER_PAGE = 8; // Liczba elementów na stronę

export const GalleryGrid = () => {
  const { isOpen, photoIndex, openLightbox, closeLightbox } = useLightbox();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(galleryGridData.length / ITEMS_PER_PAGE);

  const currentData = galleryGridData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  // Zdefiniowanie wspólnego className dla przycisków
  const buttonClassName =
    "items-center justify-center gap-[10px] rounded-full bg-gradient-btn px-[20px] py-[12px] shadow-button-shadow transition duration-300 ease-in-out hover:scale-[1.05] hover:text-violet focus:scale-[1.05] focus:text-violet desktop:px-[32px] desktop:py-[16px]";

  return (
    <section
      id="gallery-grid"
      className="pb-10 pt-[100px] desktop:pb-[140px] desktop:pt-[220px]"
    >
      <Container>
        <ul className="grid grid-cols-4 gap-x-2.5 gap-y-3 desktop:gap-x-5 desktop:gap-y-[60px]">
          {currentData.map((item: string, index: number) => (
            <GalleryGridItem
              key={index}
              imageUrl={item}
              altText={`gallery image ${(currentPage - 1) * ITEMS_PER_PAGE + index + 1}`}
              priority={index < 4}
              onClick={() =>
                openLightbox((currentPage - 1) * ITEMS_PER_PAGE + index)
              }
            />
          ))}
        </ul>
      </Container>
      <div className="mt-8 flex items-center justify-center">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={buttonClassName}
        >
          Wróć
        </button>
        <span className="px-4 py-2">{`${currentPage} / ${totalPages}`}</span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={buttonClassName}
        >
          Dalej
        </button>
      </div>
      <LightboxGallery
        isOpen={isOpen}
        onClose={closeLightbox}
        index={photoIndex}
        slides={galleryGridData}
      />
    </section>
  );
};
