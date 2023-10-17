/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme_primary: "#00504D",
        theme_secondary: "#1DAA75",
        theme_gray: "#EDEDED",
        theme_black: "#212121",
      },
      fontFamily: {
        theme_primary_bold: ["Conthrax Bold", "san-serif"],
        theme_primary_light: ["Conthrax Light", "san-serif"],
        theme_secondary_light: ["Akidenz-Grotesk-BQ-Light", "san-serif"],
        theme_secondary_bold: ["Akidenz-Grotesk-BQ-Bold", "san-serif"],
      },
      gridTemplateRows: {
        "12": "repeat(12, minmax(0, 1fr))",
      },
      gridTemplateColumns: {
        "13": "repeat(13, minimax(0, 1fr))",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
