const {nextui} = require("@nextui-org/theme");
const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // single component styles form Next Ul 
    './node_modules/@nextui-org/theme/dist/components/slider.js'
  ],
  theme: {
    extend: {},
  }, 
   darkMode: "class",
  plugins: [nextui()],
}

