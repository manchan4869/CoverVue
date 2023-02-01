/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'Noto Serif SC', 'serif'],
        // Inter: ['Inter', 'sans-serif'],
        // Poppins: ['Poppins', 'sans-serif'],
        // Anek: ['Anek Latin', 'sans-serif'],
        // Nunito: ['Nunito', 'sans-serif'],
        Smiley: ['Smiley Sans Oblique', 'sans-serif']
      }
    },
  },
  plugins: [],
}
