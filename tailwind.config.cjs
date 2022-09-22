/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      fontSize: {
        "2xxl": "28px",
      },
      colors: {
        primary: "#eb6f00",
        secondary: "#29A035",
        title: "#000000d9",
        subtitle: "#707070",
        item: "#E0E0E0",
      },
      gridTemplateColumns: {
        steps: "68px minmax(0, 1fr)",
        links: "32px minmax(0, 1fr)",
      },
      screens: {
        "xxs": "380px",
        "xs": "450px"
      },
    },
  },
  plugins: [],
}
