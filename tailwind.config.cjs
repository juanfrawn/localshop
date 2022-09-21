/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#eb6f00"
    },
    extend: {
      fontFamily: {
        comfortaa: ["Comfortaa", "sans-serif"],
      }
    },
  },
  plugins: [],
}
