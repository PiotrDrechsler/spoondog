import { StaticImageData } from "next/image";

export type ImageSource = string | StaticImageData;

export interface IconProps {
  className?: string;
}
export interface TitleProps {
  title: string;
}
export interface ServiceTitleProps extends TitleProps {
  subtitle: string;
  subtitleBold: string;
}
export interface BaseButtonProps {
  content: string;
}
export interface Clickable {
  onClick: () => void;
}
