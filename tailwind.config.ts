import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lilac: "#D8BFFF",
        mint: "#B8F0D8",
        blush: "#FFB8D0",
        butter: "#FFF0A0",
        sky: "#B8DEFF",
        bg: "#FFF8FF",
        surface: "#FFF0F8",
        ink: "#3A2040",
        ink2: "#6A4870",
        ink3: "#9A78A0",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
      borderRadius: {
        xl2: "16px",
      },
      keyframes: {
        drift: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-20px) scale(1.05)" },
          "66%": { transform: "translate(-20px,30px) scale(0.97)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0) rotate(-4deg)" },
          "50%": { transform: "translateY(-14px) rotate(4deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        logos: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        drift: "drift 12s ease-in-out infinite",
        float: "float 5s ease-in-out infinite",
        marquee: "marquee 24s linear infinite",
        logos: "logos 35s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
