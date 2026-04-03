const tailwindcssAnimate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },
        surface: {
          DEFAULT: "#0c1222",
          muted: "#111827",
          card: "#151d2e",
        },
        brand: {
          DEFAULT: "#22d3ee",
          dim: "#0891b2",
          glow: "#67e8f9",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        display: ["Outfit", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(34, 211, 238, 0.35)",
      },
      backgroundImage: {
        "grid-slate":
          "linear-gradient(to right, rgba(148, 163, 184, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.06) 1px, transparent 1px)",
        "hero-mesh":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(34, 211, 238, 0.18), transparent), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(8, 145, 178, 0.12), transparent), radial-gradient(ellipse 50% 30% at 0% 80%, rgba(34, 211, 238, 0.08), transparent)",
        "hero-mesh-light":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(34, 211, 238, 0.14), transparent), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(8, 145, 178, 0.08), transparent), radial-gradient(ellipse 50% 30% at 0% 80%, rgba(34, 211, 238, 0.05), transparent)",
        "grid-light":
          "linear-gradient(to right, rgba(15, 23, 42, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 23, 42, 0.07) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translate3d(0, 1.25rem, 0)" },
          "100%": { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "33%": { transform: "translate3d(2%, -3%, 0) scale(1.03)" },
          "66%": { transform: "translate3d(-2%, 2%, 0) scale(0.97)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "preloader-bar": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
        "hero-gradient-text": {
          "0%, 100%": { backgroundPosition: "0% center" },
          "50%": { backgroundPosition: "100% center" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "float-slow": "float 20s ease-in-out infinite",
        "float-slower": "float 28s ease-in-out infinite",
        "gradient-shift": "gradient-shift 10s ease infinite",
        "preloader-bar": "preloader-bar 1.1s ease-in-out infinite",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
