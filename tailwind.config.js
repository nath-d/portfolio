/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: "'Lato', sans-serif",
        mont: "'Montserrat', sans-serif",
      }
    },
  },
  plugins: [
    function ({addUtilities}) {
      const extendUnderline = {
          '.underline': {
              'textDecoration': 'underline',
              'text-decoration-color': '#BFA181',
          },
      }
      addUtilities(extendUnderline)
  }
  ],
}