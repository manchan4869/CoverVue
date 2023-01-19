/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        Anek: ['Anek Latin', 'sans-serif'],
        Nunito: ['Nunito', 'sans-serif']
      }
    },
  },
  plugins: [],
}
