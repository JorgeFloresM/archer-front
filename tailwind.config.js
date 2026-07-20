/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Le decimos a Tailwind que lea tus componentes
  ],
  theme: {
    extend: {
      colors: {
        archer: {
          blue: '#0B2341',
          lightBlue: '#5C88B0',
          green: '#74A764',
          bg: '#F3F4F6'
        }
      }
    },
  },
  plugins: [],
}