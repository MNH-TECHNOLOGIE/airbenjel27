import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0.75rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2rem",
      },
      screens: {
        xl: "1200px",
        "2xl": "1400px",
      },
    },
    screens: {
      xs: "420px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
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
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "ui-sm": "0.5rem",
        ui: "0.75rem",
        "ui-lg": "1rem",
        "ui-xl": "1.25rem",
      },
      boxShadow: {
        card: "0 6px 20px rgba(43,45,66,0.08)",
        float: "0 12px 32px rgba(43,45,66,0.14)",
        soft: "0 2px 10px rgba(43,45,66,0.06)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
    },
  },
  plugins: [],
};
export default config;

