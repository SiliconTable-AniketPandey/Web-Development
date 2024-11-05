const { transformWithEsbuild } = require('vite');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      boxShadow: {
        'card-shadow': '0 25px 50px -12px hsla(265.3, 20%, 10%, 35%)',
      },
      fontFamily: {
        inter: ["'Inter Placeholder'", "sans-serif"],
        tasa: ['"TASA Orbiter Display"', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      colors: { 
        nav_blue: "#3F6AFF",
        nav_glow_blue: "#D0D9FF",
        nav_button_blue: "#2f5eff",
        logo_text_black: "#192839",
        grey_text_200: "#7D7D7D",
        grey_text_300: "#757E89",
        black_bold_text: "#192839",
        green_bold_text: "#009E5C",
        developer_blue: "#032A3E",
        nav_gradient: "#Eff4ff",
        sub_text: "#768EA7",
        new_text: "#008743",
        bg_new_text: "#00A25117",
        hero_heading_blue: "#305EFF",
        bubble: "#DCE6E94D",
        developer_text: "#132644",
        developer_small_text: "#FFFFFF7A",
        editor_bg: "#C6F076",
        editor_title: "#0D3246",
        warning_orange:"#E9690C17",
        warning_text: "#40566D"
      },
    },
  },
  plugins: [],
}
