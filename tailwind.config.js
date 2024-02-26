/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Anta', 'sans-serif'],
        'ubuntu': ['Ubuntu', 'sans-serif'],
      },
      colors: {
        homeBg: '#32639d',
        navText: 'rgba(255, 255, 255, .7)',
        smallText: '#555',
        bgLight: '#F2F3F4'
      }
    },
  },
  plugins: [],
}

