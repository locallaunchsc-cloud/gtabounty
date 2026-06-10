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
        neon: "#39FF14",
        gold: "#FFD700",
        danger: "#FF3131",
        electric: "#00F5FF",
        purple: "#BF5FFF",
        "bg-base": "#080808",
        "bg-card": "#0F0F0F",
        "bg-panel": "#141414",
        "border-dim": "#1F1F1F",
        "border-glow": "#39FF14",
      },
      fontFamily: {
        mono: ["'Courier New'", "Courier", "monospace"],
        display: ["Impact", "Arial Narrow", "sans-serif"],
      },
      animation: {
        "flicker": "flicker 2s infinite",
        "pulse-neon": "pulseNeon 2s ease-in-out infinite",
        "scroll-x": "scrollX 20s linear infinite",
        "star-pulse": "starPulse 1.5s ease-in-out infinite",
        "blink": "blink 1s step-end infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
          "75%": { opacity: "0.95" },
        },
        pulseNeon: {
          "0%, 100%": { textShadow: "0 0 8px #39FF14, 0 0 16px #39FF14" },
          "50%": { textShadow: "0 0 20px #39FF14, 0 0 40px #39FF14, 0 0 60px #39FF14" },
        },
        scrollX: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        starPulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.2)", opacity: "0.8" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 8px #39FF14, 0 0 16px rgba(57,255,20,0.3)" },
          "50%": { boxShadow: "0 0 20px #39FF14, 0 0 40px rgba(57,255,20,0.5), 0 0 60px rgba(57,255,20,0.2)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
