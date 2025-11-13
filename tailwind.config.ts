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
        // Hunger-inducing BBQ palette
        bbq: {
          red: {
            deep: "#c62828",
            warm: "#d32f2f",
            DEFAULT: "#d32f2f",
          },
          orange: {
            rich: "#ff6f00",
            fire: "#ff8f00",
            DEFAULT: "#ff6f00",
          },
          yellow: {
            golden: "#ffa000",
            warm: "#ffc107",
            DEFAULT: "#ffa000",
          },
          charcoal: {
            dark: "#3e2723",
            medium: "#424242",
            DEFAULT: "#3e2723",
          },
          brown: {
            earth: "#5d4037",
            warm: "#6d4c41",
            DEFAULT: "#5d4037",
          },
        },
        // Keep original colors for backward compatibility
        primary: {
          green: "#2e7d32",
          "green-dark": "#1a5f3f",
          DEFAULT: "#2e7d32",
        },
        accent: {
          yellow: "#ffc107",
          "yellow-bright": "#ffd700",
          DEFAULT: "#ffc107",
        },
        secondary: {
          orange: "#ff6f00",
          "orange-bright": "#ff8f00",
          DEFAULT: "#ff6f00",
        },
        tertiary: {
          red: "#d32f2f",
          "red-deep": "#c62828",
          DEFAULT: "#d32f2f",
        },
      },
      fontFamily: {
        sans: ["Lato", "system-ui", "-apple-system", "sans-serif"],
        display: ["Bebas Neue", "system-ui", "sans-serif"],
        heading: ["Bebas Neue", "Righteous", "system-ui", "sans-serif"],
        garamond: ["EB Garamond", "Apple Garamond", "Garamond", "serif"],
        recoleta: ["Recoleta", "serif"],
        impact: ["Anton", "Impact", "Arial Black", "sans-serif"],
      },
      backgroundImage: {
        "flame-gradient":
          "linear-gradient(to top, #ff6f00 0%, #ff8f00 50%, #ffa000 75%, #ffc107 100%)",
        "bbq-gradient":
          "linear-gradient(135deg, #d32f2f 0%, #ff6f00 50%, #ffa000 100%)",
        "smoky-overlay":
          "linear-gradient(to bottom, rgba(62, 39, 35, 0.15) 0%, transparent 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
