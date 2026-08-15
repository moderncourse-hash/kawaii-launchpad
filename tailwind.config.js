/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          blue: '#B5D2E8',
          green: '#C2E2C8',
          yellow: '#FDF0C3',
          pink: '#F6C8D1',
          purple: '#D5C9E5',
          outline: '#333333'
        }
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
