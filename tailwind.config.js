/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main": "url('/src/assets/main.svg')"
      },
    },
  },
  plugins: [],
}
