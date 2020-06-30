module.exports = {
  purge: false,
  theme: {
    extend: {
      colors: {
        violet: {
          '100': '#F8EFF3',
          '200': '#DDC6D1',
          '300': '#9C4D73',
          '400': '#88395F',
          '500': '#74254B',
          '600': '#601137',
          '700': '#4C0023',
          '800': '#38000F',
          '900': '#240000'
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
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
      },
      minHeight: theme => ({
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
  }
}