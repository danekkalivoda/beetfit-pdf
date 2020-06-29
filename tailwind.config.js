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
      'body': ['Poppins', "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
    },
    linearGradientDirections: { // defaults to these values
      't': 'to top',
      'tr': 'to top right',
      'r': 'to right',
      'br': 'to bottom right',
      'b': 'to bottom',
      'bl': 'to bottom left',
      'l': 'to left',
      'tl': 'to top left',
    },
    linearGradientColors: { // defaults to {}
      'blue-600-blue-500': ['#3182CE', '#4299E1']
    },
    customForms: theme => ({
      default: {
        input: {
          "&:focus": {
            //borderColor: undefined,
          },
        },
        select: {
          "&:focus": {
            //borderColor: undefined,
          },
        },
        multiselect: {
          "&:focus": {
            //borderColor: undefined,
          },
        },
        textarea: {
          "&:focus": {
            //borderColor: undefined,
          },
        },
        checkbox: {
          "&:focus": {
            //borderColor: undefined,
          },
          "&:indeterminate": {
            background: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 16 16\' fill=\'white\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'8\' height=\'2\' x=\'4\' y=\'7\' rx=\'1\'/%3E%3C/svg%3E");',
            borderColor: "transparent",
            backgroundColor: "currentColor",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }
        },
        radio: {
          "&:focus": {
            //borderColor: undefined,
          },
        },
      },
    })
  },
  variants: {
    opacity: ['responsive', 'hover', 'group-hover'],
    textColor: ['responsive', 'hover', 'group-hover'],
    rotate: ['responsive', 'hover', 'group-hover'],
    gridRow: ['responsive', 'hover'],
    gridRowStart: ['responsive', 'hover'],
    gridRowEnd: ['responsive', 'hover'],
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('tailwindcss-gradients'),
  ],
}