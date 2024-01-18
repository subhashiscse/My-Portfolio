/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#23ce6b",
        secondary: "#FFC107",
        tertiary: "#2196F3",
        "black-100": "#424242",
        "black-200": "#212121",
        "white-100": "#EEEEEE",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },  
  plugins: [],
}

