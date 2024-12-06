/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        libre: ['"Libre Franklin"', 'sans-serif'], // Police Libre Franklin
        montserrat: ['"Montserrat"', 'sans-serif'], // Police Montserrat
      },
    }
  },
  plugins: [],
}