/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'blue': '#9CC1CE',
      'purple': '#44486B',
      'pink': '#FE979C',
      'orange': '#FEAE96',
      'linen': '#F6E8DF',
      'gray-dark': '#252525',
      'gray-icon': '#767676',
      'gray-bg': '#EBEBEB',
      'paragraph': "#868686",
      'project-card-title': "#535353"
    },
    extend: {
      spacing: {
        '28rem': '28rem',
        '36rem': '36rem'
      }
    },
  },
  plugins: [],
}
