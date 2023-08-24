/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-button': `linear-gradient(202deg, #8C39F3 0%, #9F52FF 100%)`,
      },
      colors:{
        'purple': '#9C50FB'
      }
    },
  },
  plugins: [],
}

