/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./components.html", "./pages/**/*.html"],
  theme: {
    screens: {
      xs: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      sd: "1440px",
      "2xl": "1536px",
      hd: "1920px",
    },

    fontWeight: {
      normal: "400",
      bold: "700",
    },

    extend: {
      fontFamily: {
        main: ["Montserrat", "sans-serif"],
      },

      colors: {
        /* main colors */
        main: "#323264",
        "main-alt": "#46466E",
        "main-soft": "#686887",

        /* accent red color */
        "accent-color": "#F0145A",

        /* active colors */
        "active-regular": "#24A3FF",
        "active-hover": "#0085FF",
        "active-dark": "#006CCF",

        /* grey colors */
        "grey-bg": "#F5F5FA",
        "grey-bg-alt": "#EDEDF7",
        "grey-text": "#B3B3BA",
        "grey-separator": "#E6E6F0",
        "modal-close": "#EC6F5D",
      },

      boxShadow: {
        once: "0 5px 25px 5px rgba(36, 163, 255, 0.5)",
      },

      /* gradient colors */

      backgroundImage: (theme) => ({
        initial:
          "linear-gradient(140deg, rgba(49,49,99,1) 0%, rgba(123,66,96,1) 100%)",
        soft: "linear-gradient(93deg, rgba(52,50,99,1) 0%, rgba(123,66,95,1) 100%)",
        red: "linear-gradient(172deg, rgba(104,49,99,1) 0%, rgba(177,33,94,1) 100%)",
        superSoft:
          "linear-gradient(35deg, rgba(99,61,113,1) 0%, rgba(49,49,99,1) 100%)",
        redText:
          "linear-gradient(90deg, rgba(240,19,89,1) 0%, rgba(239,128,128,1) 100%)",
      }),

      fontFamily: {
        main: ["Montserrat"],
      },

      fontSize: {
        "hero-h1": [
          "38px",
          {
            lineHeight: "46px",
            fontWeight: "700",
          },
        ],

        h1: [
          "36px",
          {
            lineHeight: "44px",
            fontWeight: "400",
          },
        ],

        h2: [
          "30px",
          {
            lineHeight: "36px",
            fontWeight: "700",
          },
        ],

        h3: [
          "14px",
          {
            lineHeight: "17px",
            fontWeight: "700",
          },
        ],

        "h3-caps": [
          "22px",
          {
            lineHeight: "27px",
            fontWeight: "700",
            textTransform: "capitalize",
          },
        ],

        h4: [
          "16px",
          {
            lineHeight: "20px",
            fontWeight: "700",
          },
        ],

        "paragraph-font": [
          "16px",
          {
            lineHeight: "26px",
            fontWeight: "400",
          },
        ],
        "footer-font": [
          "16px",
          {
            lineHeight: "20px",
            fontWeight: "400",
          },
        ],
        "paragraph-12": [
          "12px",
          {
            lineHeight: "15px",
            fontWeight: "700",
            letterSpacing: "1px",
          },
        ],
        "paragraph-14": [
          "14px",
          {
            lineHeight: "22px",
            fontWeight: "400",
          },
        ],
        "paragraph-about": [
          "19px",
          {
            lineHeight: "30px",
            fontWeight: "400",
          },
        ],
        "list-font": [
          "18px",
          {
            lineHeight: "26px",
            fontWeight: "400",
          },
        ],

        "link-font": [
          "16px",
          {
            lineHeight: "20px",
            fontWeight: "400",
          },
        ],
        "number-about": [
          "36px",
          {
            lineHeight: "44px",
            fontWeight: "700",
          },
        ],
        "team-md": [
          "46px",
          {
            lineHeight: "56px",
            fontWeight: "700",
          },
        ],
        "team-lg": [
          "86px",
          {
            lineHeight: "105px",
            fontWeight: "700",
          },
        ],
        "team-xl": [
          "96px",
          {
            lineHeight: "117px",
            fontWeight: "700",
          },
        ],
      },
    },

    /* Wrappers */
    maxWidth: {
      "desc-wrapper": "1440px",
      "lg": "1280px",
      "tab-wrapper": "768px",
      "mob-wrapper": "375px",
      "publications-xs": "400px",
      "publications-md": "648px",
      "publications-lg": "1600px",
    },

    plugins: [],
  },
};