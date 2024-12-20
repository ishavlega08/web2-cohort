/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          200: "#18416a",
          400: "#e4e9ef",
          500: "#7e95aa",
          700: "#002b5b"
        },
        slate: {
          200: "#f6f7f9",
        },
        green: {
          400: "#36c6c0",
          600: "#47e0d1",
        }
      }
    },
  },
  plugins: [],
}

