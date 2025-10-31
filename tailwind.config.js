/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary': {
          '50': '#f8fafc',
          '100': '#f1f5f9',
          '200': '#e2e8f0',
          '300': '#cbd5e1',
          '400': '#94a3b8',
          '500': '#64748b',
          '600': '#475569',
          '700': '#334155',
          '800': '#1e293b',
          '900': '#0f172a',
          '950': '#020617'
        },
        'secondary': {
          DEFAULT: '#0ea5e9', // sky-500
          'light': '#38bdf8', // sky-400
          'dark': '#0284c7',  // sky-600
        },
        'accent': {
          DEFAULT: '#f59e0b', // amber-500
          'light': '#fbbf24', // amber-400
          'dark': '#d97706',  // amber-600
        },
        'neutral-light': '#f1f5f9', // slate-100
        'neutral-dark': '#0f172a',  // slate-900
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: 0 },
          'to': { opacity: 1 },
        },
        fadeInUp: {
          'from': { opacity: 0, transform: 'translateY(20px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out forwards',
        fadeInUp: 'fadeInUp 0.6s ease-in-out forwards',
      },
    }
  },
  plugins: [],
  darkMode: 'class'
}
