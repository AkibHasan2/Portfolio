/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Semantic tokens — values flip with data-theme via CSS variables
        ink: "rgb(var(--ink) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        surface2: "rgb(var(--surface2) / <alpha-value>)",
        paper: "rgb(var(--paper) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        rule: "rgb(var(--rule) / <alpha-value>)",
        verified: "rgb(var(--verified) / <alpha-value>)",
        amber: "rgb(var(--amber) / <alpha-value>)",
        wire: "rgb(var(--wire) / <alpha-value>)",
        // Fixed dark navy for text on accent buttons (does not flip)
        "on-accent": "rgb(var(--on-accent) / <alpha-value>)",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-fade": "var(--grid-fade)",
      },
      keyframes: {
        stamp: {
          "0%": { transform: "scale(2.2) rotate(-14deg)", opacity: "0" },
          "60%": { transform: "scale(0.9) rotate(-8deg)", opacity: "1" },
          "100%": { transform: "scale(1) rotate(-8deg)", opacity: "1" },
        },
        typeline: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
        pulseDot: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(62,180,137,0.55)" },
          "50%": { boxShadow: "0 0 0 8px rgba(62,180,137,0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        stamp: "stamp 0.5s ease-out forwards",
        typeline: "typeline 1.8s steps(28) forwards",
        "pulse-dot": "pulseDot 2.2s ease-out infinite",
        shimmer: "shimmer 2.8s linear infinite",
        float: "floatY 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
