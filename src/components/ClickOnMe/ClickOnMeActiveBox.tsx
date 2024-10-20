import { TitleProps } from "@/utils/Types";

interface Position {
  left: string;
  top: string;
}

interface ClickOnMeActiveBoxes extends TitleProps {
  id: number;
  description: string;
  position: Position;
  positionLine: Position;
  positionInfoBox: Position;
}

export const activeboxes: ClickOnMeActiveBoxes[] = [
  {
    id: 1,
    title: "Usuwanie kamienia",
    description:
      "Oferujemy usługę usuwania kamienia nazębnego nowoczesną metodą Emmy PET, niewymagającej narkozy.",
    position: { left: "217px", top: "36.8px" },
    positionLine: { left: "32px", top: "-30px" },
    positionInfoBox: { left: "200px", top: "-60px" },
  },
  {
    id: 2,
    title: "Czyszczenie uszu",
    description:
      "To proces usuwania nagromadzonego wosku, brudu i zanieczyszczeń z przewodów słuchowych i małżowin usznych, a także na usuwaniu włosów wewnątrz ucha.",
    position: { left: "57px", top: "92.7px" },
    positionLine: { left: "33px", top: "-33px" },
    positionInfoBox: { left: "207px", top: "-60px" },
  },
  {
    id: 3,
    title: "Kąpiel",
    description:
      "Oczyszczanie sierści i skóry z brudu, zanieczyszczeń, pasożytów i martwego naskórka, co pomaga utrzymać ich zdrowie, komfort i przyjemny zapach.",
    position: { left: "200px", top: "300px" },
    positionLine: { left: "33px", top: "-35px" },
    positionInfoBox: { left: "195px", top: "-65px" },
  },
  {
    id: 4,
    title: "Usługi fryzjerskie",
    description:
      "Czesanie, rozczesywanie, strzyżenie i trymowanie to nasze zabiegi podstawowe, wykonywane w ramach dbania o zdrowie, komfort i dobre samopoczucie Twojego czworonoga.",
    position: { left: "57.6px", top: "383px" },
    positionLine: { left: "32px", top: "-35px" },
    positionInfoBox: { left: "240px", top: "-66px" },
  },
  {
    id: 5,
    title: "Przycięcie pazurków",
    description:
      "Polega na usuwaniu nadmiaru ich zrogowaciałej części, co zapobiega dyskomfortowi, bólom i problemom z poruszaniem się, a także chroni meble i podłogi przed zarysowaniami.",
    position: { left: "217px", top: "683px" },
    positionLine: { left: "32px", top: "-35px" },
    positionInfoBox: { left: "220px", top: "-66px" },
  },
];
