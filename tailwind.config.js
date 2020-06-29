module.exports = {
  purge: false,
  theme: {
    extend: {
      skew: {
        '-45': '-45deg'
      },
      fontSize: {
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