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
      animation: {
        "rotate-ticks": "rotateTicks 60s steps(60, end) infinite",
        "caret-blink": "caret-blink 850ms ease-out infinite",
      },
      keyframes: {
        rotateTicks: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
