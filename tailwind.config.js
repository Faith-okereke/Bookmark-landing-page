/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "grayishBlue": "hsl(229, 8%, 60%)",
        "softBlue": "hsl(231, 69%, 60%)",
        "softRed" :"hsl(0, 94%, 66%)",
        "veryDarkBlue": "hsl(229, 31%, 21%)"
      }
    },
  },
  plugins: [],
}