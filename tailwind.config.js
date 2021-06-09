module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        gray:{
          'icon' : '#202225',
          'sidebar':'#2F3136',
          'content':'#36393F',
          'user':'#2F3136',
          'hero':'#7289DA',
          'hover':'#34373C',
          'content-hover':'#32353B',
          'hr':"#42454A",
          'input':'#40444B'
        }
      },
      boxShadow: {
        bottom: '0 1px 0 0 rgba(4,4,4,.01), 0 1.5px 0 0 rgba(6,6,6,0.1), 0 2px 0 0 rgba(4,4,4,0.1)'
      },
      fontFamily:{
        body : ['Poppins', 'sans-serif']
      },
      transitionProperty: {
        'borderRadius':'border-radius'
      }
    }

  },
  variants: {
    extend: {
      width:['hover','focus'],
      borderRadius:['hover','focus'],
      transitionProperty:['hover','focus'],
      display: ['responsive', 'group-hover','group-focus', 'focus-within', 'hover', 'focus'],
      textColor: ['group-focus','group-hover'],
      borderWidth:['hover','focus'],
      borderColor:['hover','focus'],
      borderStyle:['hover','focus'],
      borderOpacity:['hover','focus'],
    },
  },
  plugins: [],
}
