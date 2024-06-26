import { Roboto } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bgColor: "#1E213F",
        darkBlue: "#161932",
        activeTxtColor: "#1e213f",
        unactiveTxtColor: "#d7e0ff",
        lightBlue: "#70f3f8",
        pink: "#d881f8",
        pomodoro: " #f87070",
        gray: "#e3e1e1",
        timerBgColor: "#eff1fa",
      },
      boxShadow: {
        xl: " 50px 50px 100px 0 #121530, -50px -50px 100px 0 #272c5a",
      },
      screens: {
        xl: "1440px",
      },
      fontFamily: {
        Roboto: ["var(--roboto)"],
        kumbhSans: ["var(--kumbhSans)"],
        spaceMono: ['var(--spaceMono)']
      },
    },
  },
  plugins: [],
};
export default config;
