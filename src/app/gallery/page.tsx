import { GalleryGridTitle } from "@/components/GalleryGrid/GalleryGridTitle";
import { GalleryGrid } from "../../components/GalleryGrid/GalleryGrid";

import { galleryGridHairstyeData } from "@/data/galleryGridHairstyeData";
import { galleryGridTeethData } from "@/data/galleryGridTeethData";

export default function Gallery() {
  return (
    <>
      <GalleryGridTitle />
      <GalleryGrid
        galleryTitle="Galeria Fryzur"
        galleryData={galleryGridHairstyeData}
      />
      <GalleryGrid
        galleryTitle="Galeria Zębów"
        galleryData={galleryGridTeethData}
      />
    </>
  );
}
