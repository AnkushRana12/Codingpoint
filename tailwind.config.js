/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        bg: '#030311',
        'bg-secondary': '#06090f',
        'bg-card': '#070b16',
        'bg-input': '#0a0f1d',
        'purple': {
          600: '#7c3aed',
          500: '#8b5cf6',
          400: '#a78bfa',
          300: '#c084fc',
        },
        'blue': {
          600: '#2563eb',
          400: '#60a5fa',
          300: '#93c5fd',
          cyan: '#22d3ee',
        },
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
