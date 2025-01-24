/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: 'var(--purple)',
          90: 'rgba(99, 102, 241, 0.9)'
        },
      },
    },
  },
  plugins: [],
};