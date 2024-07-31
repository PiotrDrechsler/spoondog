import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        desktop: "1440px",
      },
      fontSize: {
        "12": "12px",
        "14": "14px",
        "16": "16px",
        "18": "18px",
        "20": "20px",
        "22": "22px",
        "24": "24px",
        "26": "26px",
        "28": "28px",
        "30": "30px",
        "32": "32px",
        "34": "34px",
        "36": "36px",
        "48": "48px",
        "50": "50px",
      },
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
      },
      colors: {
        white: "#ffffff",
        cream: "#FCFCF8",
        dark: "#151513",
        yellow: "#FCD503",
        yellowLight: "#FFF8E3",
        violet: "#B603FC",
        greyFont: "#6B6B6B",
        greyLines: "#CCCCCC",
        greyLightLines: "#EAEAEA",
        greyBorders: "#EAEAE7",
        backdrop: "rgba(0, 0, 0, 0.5)",
      },
      borderRadius: {
        "footer-radius": "40px 40px 0px 0px",
        radius24: "24px",
        "header-radius": "0px 0px 12px 12px",
        "menu-radius": "0px 0px 26px 26px",
      },
      boxShadow: {
        "contact-shadow": "0px 4px 10px 0px rgba(205, 205, 205, 0.65)",
        "boxes-shadow": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        "button-shadow": "0 2px 2px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        "gradient-btn": "linear-gradient(180deg, #FCD503 14%, #FCB603 100%)",
        "services-dog1": "url('/images/servicesDog1.png')",
        "services-dog2": "url('/images/servicesDog2.png')",
      },
    },
  },
  plugins: [],
};
export default config;
