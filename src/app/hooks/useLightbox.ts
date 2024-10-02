import { useState } from "react";

export const useLightbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  return { isOpen, photoIndex, openLightbox, closeLightbox };
};
