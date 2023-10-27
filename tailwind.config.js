/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        vsm: "300px",
      },
      fontFamily: {
        text: ["Alfa Slab One", "cursive"],
        navtext: ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        bg: "url('./images/Background.png')",
        login: "url('./images/gradient.jpeg')",
        "login-doodle": "url('./images/login-doodle.jpg')",
        "temple-outline": "url('./images/Temples.png')",
        "scooter-image": "url('./images/ktm.png')",
        ellipse: "url('./images/ellipse-bg.png')",
        ninja: "url('./images/ninja.png')",
        helmet: "url('./images/helmet.png')",
      },
      colors: {
        "location-color": "#FED250",
      },
    },
  },
  plugins: [],
};
