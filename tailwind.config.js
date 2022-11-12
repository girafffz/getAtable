/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        lightBrown: "#dbc3bb",
        darkBrown: "#5d4247",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
