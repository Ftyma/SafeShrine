/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        custom1: ["Shantell Sans", "cursive"],
        playfair: ["Playfair Display", "serif"],
        kanit: ["Kanit", "sans-serif"],
        roboto: ["Roboto Slab", "serif"],
        space: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
