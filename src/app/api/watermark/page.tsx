import sharp from "sharp";

const Watermark = () => {
  sharp("./public/watermark.png")
    .resize(200, 200)
    .toFile("./public/resized.png");
  return null;
};

export default Watermark;
