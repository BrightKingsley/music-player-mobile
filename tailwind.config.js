/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-grey": "#2d2e37",
        "light-grey": "#c6d2daff",
        pink: "#ed345aff",
        "accent-blue": "#3c3abe",
        "accent-purple": "#3c3abe",
        white: "#fcfcff",
      },
    },
  },
  plugins: [],
};
