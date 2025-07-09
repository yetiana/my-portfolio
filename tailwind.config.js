// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: ['animate-horse'],
  theme: {
    extend: {
      keyframes: {
        horse: {
          '0%': { backgroundPosition: '0px 0px' },
          '100%': { backgroundPosition: '-574px 0px' },
        },
      },
      animation: {
        horse: 'horse 1s steps(7) infinite',
      },
    },
  },
  plugins: [],
};
