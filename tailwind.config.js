/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","index.html"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '128': '32rem',
        '144': '36rem',
      },
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

