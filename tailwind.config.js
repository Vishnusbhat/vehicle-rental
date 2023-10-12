/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        text: ['Alfa Slab One', 'cursive'],
        navtext: ['Open Sans', 'sans-serif']
       },
      backgroundImage: {
        'bg': "url('./images/Background.png')",
        'bg-login': "url('./images/gradient.jpeg')",
        'login-doodle': "url('./images/login-doodle.jpg')",
        'temple-outline': "url('./images/Temples.png')",
        'scooter-image': "url('./images/scooterīmage.png')"
      },
      colors:{
        'location-color': '#FED250',
      },
    },
  },
  plugins: [],
}

