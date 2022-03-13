module.exports = {
  purge: {
    content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
      "myblack":'#2B2D42',
      "mygray":"#8D99AE",
      "myskygray":"#EDF2F4",
      "myred":"#EF233C",
      "mypurered":"#D90429",
    },
    fontFamily: {
      'Shizuru': ['Shizuru', 'cursive'],
      'sourcesanspro': ['"Source Sans Pro"', 'sans-serif']
    }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
