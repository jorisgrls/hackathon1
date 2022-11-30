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
        'light-main': '#0284C7',
        'light-button': '#7DD3FC',
        'color-main': '#FFFFFF',
      },
    },
  },
  plugins: [],
};
