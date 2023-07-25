/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      redHat: ["Red Hat Text", "sans-serif"],
    },
    colors: {
      "grayish-blue": "hsl(237, 18%, 59%)",
      "soft-red": "hsl(345, 95%, 68%)",
      "dark-desaturated-blue": "hsl(236, 21%, 26%)",
      "very-dark-blue": "hsl(235, 16%, 14%)",
      "mostly-black": "hsl(234, 17%, 12%)",
    },
    extend: {},
  },
  plugins: [],
};
