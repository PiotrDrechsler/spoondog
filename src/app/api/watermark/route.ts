import { NextResponse } from "next/server";
import sharp from "sharp";
import fs from "fs";
import path from "path";

export async function GET(req: Request): Promise<NextResponse> {
  const url = new URL(req.url);
  const imagePath = url.searchParams.get("imagePath");
  if (!imagePath) {
    return NextResponse.json(
      { error: "imagePath is required" },
      { status: 400 },
    );
  }

  try {
    const image = fs.readFileSync(path.join(process.cwd(), imagePath));
    let watermarkSVG = fs.readFileSync(
      path.join(process.cwd(), "src/icons/LogoFooter.tsx"),
      "utf-8",
    );
    watermarkSVG = watermarkSVG.replace(/fill="#151513"/g, 'fill="#fff"');
    const watermark = await sharp(Buffer.from(watermarkSVG))
      .png()
      .tint({ r: 255, g: 255, b: 255, alpha: 0.3 })
      .toBuffer();

    const processedImage = await sharp(image)
      .composite([{ input: watermark, gravity: "southeast" }])
      .png()
      .toBuffer();
    return new NextResponse(processedImage, {
      headers: { "Content-Type": "image/png" },
    });
  } catch (error: unknown) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 },
    );
  }
}
