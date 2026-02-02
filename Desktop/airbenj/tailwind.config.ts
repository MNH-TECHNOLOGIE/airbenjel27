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
        primary: {
          DEFAULT: "#FF4E45", // Warm Red
          dark: "#E6392F",
          light: "#FF6B63",
        },
        secondary: {
          DEFAULT: "#2B2D42", // Outer Space (dark blue)
          light: "#3A3D5C",
          dark: "#1A1C2E",
        },
        white: {
          DEFAULT: "#FFFFFF", // Perfect White
        },
        accent: {
          DEFAULT: "#F8F9FA",
          dark: "#E9ECEF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;


