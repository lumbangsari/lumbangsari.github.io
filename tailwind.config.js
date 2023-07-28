/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","index.html"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
      },
      colors:{
      primary: '#D66226',
      dark: '#1A2B3B',
      secondary: '#e2e8f0',
    },
    screens: {
      '2xl': '1320px',
    },
  },
  },
  plugins: [],
};

