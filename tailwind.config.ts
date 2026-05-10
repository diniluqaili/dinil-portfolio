import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neon:     "#C8FF00",
        dark:     "#08080E",
        surface:  "#0F0F1A",
        surface2: "#14141F",
        edge:     "#1C1C2E",
        muted:    "#55556E",
        primary:  "#DEDEE8",
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        mono: ['"Space Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;