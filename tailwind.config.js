/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // <-- Add this line
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
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
      height: {
        dynamic: ["100vh /* fallback */", "100dvh"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
  darkMode: "class",
};
