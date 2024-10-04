/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        success: '#1EB564',
        purple: '#7367F0',
        dark: '#23272E',
        blue: '#0F60FF',
        danger: '#EA5455',
        lightPurple: '#D4CFFB',
        purple: '#8f85f3',
      },
      screens: {
        xl: '1400px',
        lg: '950px',
        md: '840px',
        sm: '700px',

        // '3xl': '1600px',
      },
    },
  },
  plugins: [],
};
