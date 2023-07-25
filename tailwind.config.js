/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      redHat: ["Red Hat Text", "sans-serif"],
    },
    colors: {
      white: colors.white,
      black: colors.black,
      "grayish-blue": "hsl(237, 18%, 59%)",
      "soft-red": "hsl(345, 95%, 68%)",
      "dark-desaturated-blue": "hsl(236, 21%, 26%)",
      "very-dark-blue": "hsl(235, 16%, 14%)",
      "mostly-black": "hsl(234, 17%, 12%)",
    },
    extend: {
      backgroundImage: {
        stars: "url('/src/assets/bg-stars.svg')",
      },
    },
  },
  plugins: [],
};
