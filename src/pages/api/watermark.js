import path from "path";
import fs from "fs";
import sharp from "sharp";

export default async function handler(req, res) {
  console.log("Endpoint /api/watermark called");

  // Sprawdzenie metody
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Pobranie ścieżki obrazu z parametrów zapytania
    const { imagePath } = req.query;
    if (!imagePath) {
      return res
        .status(400)
        .json({ message: "imagePath parameter is required" });
    }

    // Ustalenie pełnej ścieżki do obrazu
    const fullImagePath = path.join(process.cwd(), "public", imagePath);
    console.log("Full image path:", fullImagePath);

    // Ścieżka do wodnego znaku
    const watermarkPath = path.join(process.cwd(), "public", "watermark.png");

    // Sprawdzenie, czy pliki istnieją
    if (!fs.existsSync(fullImagePath) || !fs.existsSync(watermarkPath)) {
      return res.status(404).json({ message: "Image or watermark not found" });
    }

    // Załaduj obrazy
    const image = sharp(fullImagePath);
    const watermark = sharp(watermarkPath)
      .resize({ width: 200 }) // Dopasowanie rozmiaru wodnego znaku
      .png();

    // Pobierz metadane obrazu oraz przygotuj bufor wodnego znaku
    const [imageMetadata, watermarkBuffer] = await Promise.all([
      image.metadata(),
      watermark.toBuffer(),
    ]);

    // Dodaj wodny znak do obrazu
    const watermarkedImage = await image
      .composite([
        {
          input: watermarkBuffer,
          gravity: "southeast", // Pozycja wodnego znaku (southeast to dolny prawy róg)
          blend: "over",
        },
      ])
      .toBuffer();

    // Ustaw nagłówki odpowiedzi
    res.setHeader("Content-Type", "image/png");
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");

    // Wyślij przetworzony obraz
    res.status(200).send(watermarkedImage);
  } catch (error) {
    console.error("Error adding watermark:", error);
    res.status(500).json({ message: "Error processing image" });
  }
}
