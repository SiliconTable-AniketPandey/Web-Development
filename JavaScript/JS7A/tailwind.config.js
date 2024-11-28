/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./index1.html",],
  theme: {
    extend: {
      fontFamily: {
        inter: ["'Inter Placeholder'", "sans-serif"],
        tasa: ['"TASA Orbiter Display"', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      colors:{
        grey_text_300: "#757E89",
      },
    },
  },
  plugins: [],
}

