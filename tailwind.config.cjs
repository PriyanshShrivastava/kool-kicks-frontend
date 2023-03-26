/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#FDBA74',
        lightGreen: '#e8f5de',
        lightPink: '#f7ecee',
        lightGray: '#E1EAEE',
        lightYellow: '#ffffe1',
        darkGreen: '#d9eec8',
        darkPink: '#f2e0e2',
        darkGray: '#9ea4a7',
        darkYellow: '#ffffc2',
        mid: 'white',
      },
      fontFamily: {
        josefin: ["'Josefin Sans'", "'sans - serif'"],
        raleway: ["'Raleway'", "' sans-serif'"],
      },
    },
  },
  plugins: [],
};
