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
          500: "#7e95aa",
          700: "#002b5b"
        },
        green: {
          400: "#36c6c0"
        }
      }
    },
  },
  plugins: [],
}

