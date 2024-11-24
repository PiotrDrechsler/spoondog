import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Layout } from "../components/Layout";

export const metadata: Metadata = {
  title: "Spoondog",
  description:
    "Profesjonalne usługi strzyżenia oraz zabiegi pielęgnacyjne u psów, na terenie Tułowic, Nysy, Grodkowa, Niemodlina, Opola, Brzegu, Korfantowa, Strzelina, Oławy, Wiązowa oraz okolic.",
  keywords:
    "Strzyżenie psów, Zabiegi pielęgnacyjne dla psów, Czesanie psów, Trymowanie, Przycinanie pazurków, Pięlęgnacja uszu i oczu, Pielęgnacja uzębienia u psów, Kąpiele psów, Usuwanie insektów i psów ",
  robots: "index, follow",
  openGraph: {
    title: "Spoondog",
    description:
      "Profesjonalne usługi strzyżenia oraz zabiegi pielęgnacyjne u psów, na terenie Tułowic, Nysy, Grodkowa, Niemodlina, Opola, Brzegu, Korfantowa, Strzelina, Oławy, Wiązowa oraz okolic.",
    url: "https://www.spoondog.eu",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Spoondog",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="font-dmSans text-dark">
        <Layout>{children}</Layout>
        <SpeedInsights />
      </body>
    </html>
  );
}
