/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--ink) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        surface2: "rgb(var(--surface2) / <alpha-value>)",
        paper: "rgb(var(--paper) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        rule: "rgb(var(--rule) / <alpha-value>)",
        verified: "rgb(var(--verified) / <alpha-value>)",
        amber: "rgb(var(--amber) / <alpha-value>)",
        wire: "rgb(var(--wire) / <alpha-value>)",
        "on-accent": "rgb(var(--on-accent) / <alpha-value>)",
        success: "rgb(var(--success) / <alpha-value>)",
      },
      fontFamily: {
        display: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        body: ["'Source Sans 3'", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-fade": "var(--grid-fade)",
      },
      letterSpacing: {
        tightish: "-0.02em",
      },
      keyframes: {
        stamp: {
          "0%": { transform: "scale(1.15)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        typeline: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
        pulseDot: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(63,185,80,0.45)" },
          "50%": { boxShadow: "0 0 0 6px rgba(63,185,80,0)" },
        },
      },
      animation: {
        stamp: "stamp 0.4s ease-out forwards",
        typeline: "typeline 1.6s steps(24) forwards",
        "pulse-dot": "pulseDot 2.4s ease-out infinite",
      },
    },
  },
  plugins: [],
};
