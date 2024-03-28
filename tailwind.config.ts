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
        background: "rgb(var(--background-rgb))",
        "background-100": "rgb(var(--background-100-rgb))",
        foreground: "rgb(var(--foreground-rgb))",
        primary: "rgb(var(--primary-rgb))",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
export default config;
