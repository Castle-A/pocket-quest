/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', '-apple-system', 'system-ui', 'sans-serif'],
      },
      colors: {
        pastel: {
          green: '#A8E6CF',
          blue: '#A0C4FF',
          yellow: '#FFF3B0',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'breathe': 'breathe 3s ease-in-out infinite',
        'pixel-pop': 'pixelPop 0.3s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.9' },
        },
        pixelPop: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '80%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
