/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hazel': {
          50: '#fdf8e8',
          100: '#f9ecc7',
          200: '#f4de93',
          300: '#ecc856',
          400: '#e4b736',
          500: '#d4a021',
          600: '#b67e1b',
          700: '#925c18',
          800: '#79491b',
          900: '#683e1d',
        },
        'letter': {
          'parchment': '#f5e9d0',
          'ink': '#2c1810',
        }
      },
      fontFamily: {
        'handwriting': ['"Dancing Script"', 'cursive'],
        'sans': ['Inter', 'system-ui'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        }
      },
      backgroundImage: {
        'paper-texture': "url('https://www.transparenttextures.com/patterns/paper.png')",
      }
    },
  },
  plugins: [],
}
