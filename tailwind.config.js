/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      animation: {
        wiggle: 'wiggle 2.5s ease-in-out infinite',
        typing: "typing 2s steps(14), blink 0.1s infinite"
      },
      keyframes: {
      wiggle: {
        '0%, 100%': { 
          transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(67px)' },
      },
      typing: {
        from: { width: "0" },
        to: { width: "14ch" }
      },
      blink: {
        from: { "border-right-color": "transparent" },
        to: { "border-right-color": "black" },
      },
    }},
  },
  plugins: [],
}