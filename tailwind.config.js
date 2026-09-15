/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        heritage: {
          dark: '#090909',
          card: '#111111',
          surface: '#171717',
          border: '#2A2518',
          gold: '#D4AF37',
          'gold-light': '#F5E6B3',
          'gold-dark': '#9A7B1C',
          beige: '#E8D8B5',
          vermilion: '#8B0000',
          'vermilion-light': '#B22222',
        }
      },
      fontFamily: {
        cinzel: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        sans: ['"Be Vietnam Pro"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(212, 175, 55, 0.35)',
        'gold-glow-lg': '0 0 50px -10px rgba(212, 175, 55, 0.45)',
        'vermilion-glow': '0 0 30px -5px rgba(139, 0, 0, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
