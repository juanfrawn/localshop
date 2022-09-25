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
        navbar: "200px minmax(0, 1fr) 20px",
        cards: "minmax(0, 400px) minmax(450px, 1fr)",
        carrito: "minmax(0, 100px) 1fr",
        carritoXL: "minmax(0, 80px) 1fr",
      },
    },
  },
  plugins: [],
}
