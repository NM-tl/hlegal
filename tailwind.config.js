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

        /* gradient colors */
      },



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
        }, capitalize],
        
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
