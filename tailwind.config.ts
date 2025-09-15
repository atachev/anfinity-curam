import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1536px",
      "4xl": "1920px",
    },
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      colors: {
        "anf-primary-red": "rgb(var(--anf-primary-red))",
      },
    },
  },
  plugins: [],
};

export default config;
