/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./pages/**/*.{html}",
  ],
  theme: {
    extend: { 
      colors: {
        'text': 'purple'
      }
    },
  },
  plugins: [],
}
