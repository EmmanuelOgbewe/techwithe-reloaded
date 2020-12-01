module.exports = {
  // future: {
  //   removeDeprecatedGapUtilities: true,
  //   purgeLayersByDefault: true,
  // },
  // purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    
    extend: {
      colors : {
        'darkTheme' : '#101010',
        'darkGrey' : '#2E2E2E',
        'blueBanner' : '#4421D1'
      },
      fontSize: {
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem'
      },

      // fontFamily : {
      //   'sans' : ['Poppins']
      // },
      screens : {
        'xxl' : '1900px'
      }

    },
  },
  variants: {},
  plugins: [],
}