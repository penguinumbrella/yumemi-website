/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'dreamy': {
          50: '#f8f9ff',
          100: '#e8ecff',
          200: '#d1d9ff',
          300: '#a8b8ff',
          400: '#7a8fff',
          500: '#4a5fff',
          600: '#2d3fff',
          700: '#1f2bcc',
          800: '#1a23a3',
          900: '#1a1f82',
        },
        'lavender': {
          50: '#faf9ff',
          100: '#f3f1ff',
          200: '#e9e5ff',
          300: '#d7ceff',
          400: '#c4b5ff',
          500: '#a78bfa',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 15s ease infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        twinkle: {
          '0%, 100%': { 
            opacity: '0.3',
            transform: 'scale(1)'
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1.2)'
          },
        },
      },
    },
  },
  plugins: [],
} 