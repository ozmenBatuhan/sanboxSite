/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Örnek fontlar, Google Fonts'tan eklenebilir
        serif: ['Playfair Display', 'serif'], // Başlıklar için
        sans: ['Lato', 'sans-serif'],       // Gövde metinleri için
      }
    },
  },
  plugins: [],
}