export const galleryGridTeethData = [
  ...Array.from(
    { length: 20 }, // Adjust the number as needed
    (_, i) => `/images/gallery/teeth/gallery(${20 - i}).jpeg`,
  ),
];
//Remember, when adding new teeth photos, add clean one first. With reverse iteration, the gallery will display dirty first, then clean :)