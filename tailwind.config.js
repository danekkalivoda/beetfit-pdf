module.exports = {
  purge: false,
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  theme: {
    extend: {
      colors: {
        violet: {
          '100': '#F5EAF0',
          '200': '#E1C1D1',
          '300': '#CD98B2',
          '400': '#B86F93',
          '500': '#9D4D74',
          '600': '#894365',
          '700': '#743956',
          '800': '#602F47',
          '900': '#4B2537'
        },
        green: {
          '100': '#F3F4E3',
          '200': '#E0E2B7',
          '300': '#dee279',
          '400': '#cace65',
          '500': '#B6BA51',
          '600': '#a2a63d',
          '700': '#8e9229',
          '800': '#7a7e15',
          '900': '#666a01'
        }
      },
      skew: {
        '-45': '-45deg'
      },
      fontSize: {
        '3xs': '.55rem',
        '2xs': '.65rem'
      },
      spacing: {
        '14': '3.5rem',
        '28': '7rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
      },
      minHeight: theme => ({
        ...theme('spacing')
      }),
      minWidth: theme => ({
        ...theme('spacing')
      }),
      inset: {
        '1/2': '50%'
      },
      opacity: {
        '95': '0.95'
      },
    },
    fontFamily: {
      'body': ['Inter', "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
    },
  },
  variants: {
    textColor: [],
    textOpacity: [],
    borderColor: [],
    backgroundColor: [],
    width: [],
    flex: [],
    padding: [],
    margin: [],
    fontSize: [],
    backgroundOpacity: [],
    boxShadow: [],
    opacity: [],
    translate: [],
    rotate: [],
    scale: [],
    gridTemplateColumns: false,
    gridColumn: false,
    gridColumnStart: false,
    gridColumnEnd: false
  }
}
