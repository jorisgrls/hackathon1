/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('/src/assets/main.svg')",
      },
      colors: {
        'light-main': '#312E81',
        'light-button': '#A78BFA',
        'color-main': '#FFFFFF',
      },
    },
  },
  plugins: [],
};
