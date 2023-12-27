/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'viet':['Be Vietnam Pro']
      },
      colors:{
        // Primary

        'BrightRed': 'hsl(12, 88%, 59%)',
        'DarkBlue': 'hsl(228, 39%, 23%)',

        // ### Neutral

        'DarkGrayishBlue': 'hsl(27, 12%, 61%)',
        'VeryDarkBlue': 'hsl(233, 12%, 13%)',
        'VeryPaleRed' : 'hsl(13, 100%, 96%)',
        'VaryLightGray' : 'hsl(0, 0%, 98%)'
      },
    },
  },
  plugins: [],
}

