module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridAutoRows: {
        'minmax': 'minmax(min-content, max-content)',
      }
    },
    fontFamily: {
      'sans': ['Montserrat'],
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
