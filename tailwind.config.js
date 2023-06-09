/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#ffc2c8",
        deleteBtn: "#DD5568",
        editBtn: "#EEA743",
        backBtn: "#BBDCDE",
      },

      fontFamily: {
        custom1: ["Shantell Sans", "cursive"],
        playfair: ["Playfair Display", "serif"],
        kanit: ["Kanit", "sans-serif"],
        roboto: ["Roboto Slab", "serif"],
        space: ["Space Grotesk", "sans-serif"],
      },
    },

    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
