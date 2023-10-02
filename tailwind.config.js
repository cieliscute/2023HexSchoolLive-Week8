/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./pages/**/*.html', './layout/**/*.ejs', './main.js'],
  theme: {
    container: {
      center: true,
      padding: '12px'
    },
    fontFamily:{
      'sans':['"Noto Sans TC"',...defaultTheme.fontFamily.sans],
      'serif':['Shrikhand',...defaultTheme.fontFamily.serif]
    },
    extend: {
      colors:{
        'primary':{
          DEFAULT:'#7000FF',
          'light':'#7000FF',
          'dark':'#11002D',
          '100':'#6E01F8',
          '200':'#380C7E',
          '300':'#1F0F39'
        },
        'neutral':{
          DEFAULT: '#E9E2F3',
          'light':'#28085C',
          'dark':'#000000',
          'white':'#ffffff',
        }
      }
    },
  },
  plugins: [],
}