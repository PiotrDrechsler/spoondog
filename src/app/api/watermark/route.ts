import { NextRequest, NextResponse } from "next/server";
import path from "path";
import sharp from "sharp";

export async function POST(req: NextRequest) {
  try {
    const { src } = await req.json();
    if (typeof src !== "string") {
      return NextResponse.json(
        { error: "Parametr 'src' musi być stringiem." },
        { status: 400 },
      );
    }

    const inputPath = path.join(process.cwd(), "public", src);
    const logoPath = path.join(process.cwd(), "public", "watermark.svg");
    const outputPath = src.replace(/(\.\w+)$/, "_watermarked$1"); // Dodaje "_watermarked" przed rozszerzeniem

    await sharp(inputPath)
      .composite([{ input: logoPath, gravity: "southeast" }])
      .toFile(path.join(process.cwd(), "public", outputPath)); // Zapis nowego pliku

    return NextResponse.json({
      message: "Watermark dodano.",
      image: outputPath,
    });
  } catch (error) {
    console.error("Błąd podczas przetwarzania obrazu:", error);
    return NextResponse.json({ error: "Wystąpił błąd." }, { status: 500 });
  }
}
