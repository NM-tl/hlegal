/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./pages/**/*.html"
  ],
  theme: {
    fontWeight: {
      normal: '400',
      bold: '700'
    },

    extend: { 
      colors: {
        /* main colors */
        'main': '#323264',
        'main-alt': '#46466E',
        'main-soft': '#686887',

        /* accent red color */
        'accent-color': '#F0145A',

        /* active colors */
        'active-regular': '#24A3FF',
        'active-hover': '#0085FF',
        'active-dark': '#006CCF',

        /* grey colors */
        'grey-bg': '#F5F5FA',
        'grey-bg-alt': '#EDEDF7',
        'grey-text': '#B3B3BA',
        'grey-separator': '#E6E6F0',
      },

      /* gradient colors */

      backgroundImage: (theme) => ({
        'initial': 'linear-gradient(140deg, rgba(49,49,99,1) 0%, rgba(123,66,96,1) 100%)',
        'soft': 'linear-gradient(93deg, rgba(52,50,99,1) 0%, rgba(123,66,95,1) 100%)',
        'red': 'linear-gradient(172deg, rgba(104,49,99,1) 0%, rgba(177,33,94,1) 100%)',
        'superSoft': 'linear-gradient(35deg, rgba(99,61,113,1) 0%, rgba(49,49,99,1) 100%)',
        'redText': 'linear-gradient(90deg, rgba(240,19,89,1) 0%, rgba(239,128,128,1) 100%)',
      }),

      fontFamily: {
        'main': ['Montserrat'],
      },

      fonts: {
        'hero-h1': ['38px', {
          lineHeight: '46px',
          fontWeight: '700',
        }],

        'h2': ['30px', {
          lineHeight: '36px',
          fontWeight: '700',
        }],

        'h3': ['14px', {
          lineHeight: '17px',
          fontWeight: '700',
        }],

        'h3-caps': ['22px', {
          lineHeight: '27px',
          fontWeight: '700',
          textTransform: 'capitalize'
        }],
        
        'h4': ['16px', {
          lineHeight: '20px',
          fontWeight: '700',
        }],

        'paragraph-font': ['16px', {
          lineHeight: '26px',
          fontWeight: '400',
        }],

        'list-font': ['18px', {
          lineHeight: '26px',
          fontWeight: '400',
        }],

        'link-font': ['16px', {
          lineHeight: '20px',
          fontWeight: '400',
        }],
      },
    },

  plugins: [],

  }
}
