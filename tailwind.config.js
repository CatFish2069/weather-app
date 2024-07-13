/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['bahnschrift'], // Primary font with fallback
        serif: ['Georgia'], // Web-safe serif font
        mono: ['Courier New'], // Web-safe monospace font
        display: ["Montserrat"], // Custom display font for headings
      },
    },
  },
  plugins: [],
}
