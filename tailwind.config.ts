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
        roboto: ["Roboto", "sans-serif"],
        lobster: ["Lobster Two", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        white: "#ffffff",
        cream: "#FFFEFC",
        light: "#FFF8E3",
        dark: "#151513",
        grey: "#F2F2F2",
        yellow: "#FCD503",
        violet: "#B603FC",
      },
      borderRadius: {
        "footer-radius": "40px 40px 0px 0px",
      },
      boxShadow: {
        "footer-shadow": "0px 4px 10px 0px #000",
      },
      backgroundImage: {
        "gradient-btn":
          "linear-gradient(180deg, #FCD503 14.87%, #FCB603 107.5%)",
      },
    },
  },
  plugins: [],
};
export default config;
