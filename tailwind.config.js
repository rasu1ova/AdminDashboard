/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundColor: theme => ({
      'purple': '#694BDB',
      'white': '#FFFFFF',
      'danger': '#e3342f',
      'grey': '#ECECEC',
    }),
    textColor: {
      'purple': '#694BDB',
      'white': '#FFFFFF',
      'danger': '#e3342f',
      'grey': '#B5B7B9',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1439px',
    },
    extend: {
      boxShadow: {
        'headShad': '0px 2px 2px rgba(163, 171, 185, 0.26)',
      }
    }
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
}
  