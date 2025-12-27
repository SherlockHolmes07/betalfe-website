/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8C9FF5',
        'primary-dark': '#6C7FD8',
      },
    },
  },
  plugins: [],
}
