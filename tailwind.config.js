/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: ['index.html', 'pages/**/*.html'],
  theme: {

    extend: {
      colors: {
        deeppurple: '#4C4667',
        lightgray: '#FFFFFF75',
        primarytext: '#FFFFFF',
        primemain: '#4169E1',
        crystalwhite: '#F4F4F4',
        textsec: '#141414B2',
        lgray: '#DFDFDF',
        pbg: '#C8E6C95E',
        bubor: '#4169E13D',
        joinc: '#1414148F'
      },
      fontFamily: {

        roboto: 'Roboto',
      }
    },
  },
  plugins: [],
}

