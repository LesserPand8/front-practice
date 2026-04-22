const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#F05340", // Laravel Red
          secondary: "#6c757d", // Gray
        },
      },
    },
  },
  plugins: [],
};
