/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        purple: {
          DEFAULT: "hsl(249, 54%, 55%)",
          50: "hsl(249, 100%, 76%)",
          100: "	hsl(249, 63%, 66%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      transitionDuration: {
        250: "250ms",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "moveline-down": {
          from: { height: "0%" },
          to: { height: "100%" },
        },
        "moveline-left": {
          to: { width: "0%" },
        },
        "slide-up": {
          from: { transform: "translateY(10%)", opacity: 0 },
          to: { transform: "translateY(0)", opacity: 1 },
        },
        "scale-up": {
          from: { height: 0, width: 0 },
          to: { height: "100%", width: "100%" },
        },
        "scale-down": {
          from: { height: "100%", width: "100%" },
          to: { height: 0, width: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "moveline-down":
          "moveline-down var(--animation-duration) linear forwards",
        "moveline-left": "moveline-left 4.4s linear forwards",

        "scale-up": "scale-up 5.3s ease-in-out forwards",

        "scale-down": "scale-down 5.3s ease-in-out forwards",
        "slide-up": "slide-up 1s ease-in-out forwards",
      },
    },
    screens: {
      xs: "475px",
      "2xs": "400px",
      ...defaultTheme.screens,
    },
  },
  plugins: [require("tailwindcss-animate")],
};
