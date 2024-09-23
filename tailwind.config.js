/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'chess-black': '#000000',
        'chess-white': '#ffffff',
        'chess-gray': '#808080',
      },
    },
  },
  plugins: [],
}

