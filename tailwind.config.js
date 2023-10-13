/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      container : {
        center : true,
      },
      fontFamily : {
        primary : ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary : "#655af3",
      }
    },
  },
  plugins: [],
}

