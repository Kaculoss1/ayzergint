import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: { card: "0px 35px 120px -15px #211e35" },
      fontFamily: {
        kbold: ["var(--ESB)"],
        kmedium: ["var(--ESM)"],
        kregular: ["var(--ESR)"],
        kextrabold: ["var(--ESXB)"],
        kextralight: ["var(--ESXL)"],
        klight: ["var(--ESL)"],
      },
      colors: {
        "primary-black": "#1A232E",
        "secondary-white": "#c7c7c7",
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      transitionTimingFunction: {
        "out-flex": "cubic-bezier(0.05, 0.6, 0.4, 0.9)",
      },
    },
  },
  plugins: [],
};
export default config;
