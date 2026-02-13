/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#2d5a4f',
        'primary': '#45907f',
        'primary-light': '#6ba99d',
        'accent': '#c4c4c4',
        'light-bg': '#f0f5f3',
      }
    },
  },
  plugins: [],
}