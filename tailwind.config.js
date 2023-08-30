/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      animation: {
        wiggle: 'wiggle 2.5s ease-in-out infinite',
      },
      keyframes: {
      wiggle: {
        '0%, 100%': { 
          transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(67px)' },
      }
    }},
  },
  plugins: [],
}