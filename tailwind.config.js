/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#471DDF',
        'primary-dark': '#370bc1',
      },
    },
  },
  plugins: [],
}
