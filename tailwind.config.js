/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'dark': '#1C1C1C',
        'gray': '#3A3A3B',
        'primary': '#F46B45',
        'secondary': '#EEA849'
      },
      minHeight: {
        'togglePanel': '75vh'
      },
      inset: {
        '36rem': '36rem'
      }
    },
  },
  plugins: [],
}
