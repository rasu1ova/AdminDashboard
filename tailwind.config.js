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
    }),
    textColor: {
      'purple': '#694BDB',
      'white': '#FFFFFF',
      'danger': '#e3342f',
    }
  },
  plugins: [],
}
  