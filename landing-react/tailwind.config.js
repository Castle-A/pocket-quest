/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'SF Mono', 'monospace'],
      },
      colors: {
        ink: '#0B0B0C',
        body: '#4B5563',
        subtle: '#9CA3AF',
        surface: '#F9FAFB',
        stroke: 'rgba(0,0,0,0.08)',
        blue: { royal: '#2563EB', tech: '#3B82F6', navy: '#1E40AF' },
      },
      maxWidth: { site: '1200px' },
      spacing: { 18: '4.5rem', 22: '5.5rem', 30: '7.5rem' },
      borderRadius: { card: '8px' },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)',
        float: '0 30px 60px rgba(0,0,0,0.02)',
      },
      animation: {
        'pixel-drop': 'pixelDrop 1s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        pixelDrop: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(2px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
