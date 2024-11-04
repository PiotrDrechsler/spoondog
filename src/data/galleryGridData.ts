export const galleryGridData = [
  // JPEG images
  ...Array.from(
    { length: 81 },
    (_, i) => `/images/gallery/gallery (${i}).jpeg`,
  ),
  // JPG images
  ...Array.from(
    { length: 32 },
    (_, i) => `/images/gallery/gallery (${i + 1}).jpg`,
  ),
];
