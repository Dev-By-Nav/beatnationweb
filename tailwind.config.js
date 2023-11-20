/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'bn-navy': '#f9faeb',
      'bn-gold': '#4e7886',

    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      open: ['Open Sans', 'sans-serif'],
      raleway: ['Raleway', 'sans-serif'],
    },
  },
  },
  plugins: [],
}


