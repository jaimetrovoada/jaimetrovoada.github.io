/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--color-background))",
        "background-secondary": "rgb(var(--color-background-secondary))",
        "background-secondary-75":
          "rgb(var(--color-background-secondary) / 0.75)",
        foreground: "rgb(var(--color-foreground))",
        "foreground-secondary": "rgb(var(--color-foreground-secondary))",
        "header-primary": "rgb(var(--color-section-header))",
        "header-secondary": "rgb(var(--color-project-header))",
      },
      backgroundImage: {
        "hero-illustration": "url('/images/website-development.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
