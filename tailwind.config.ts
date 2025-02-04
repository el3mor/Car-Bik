import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        din: ["DINNextArabic", "sans-serif"],
      },
      animation:{
        "border-appear": "borderAppear 0.3s ease-in-out",
        "opacity": "opacity 1.5s ease-in-out"
      },
      keyframes: {
        borderAppear: {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "100%",
          },
        },
        opacity: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
