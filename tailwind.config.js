/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslategray: "#393939",
        crimson: "#d20b17",
        olivedrab: "#78bb4f",
        black: "#000",
        yellowgreen: "#bde031",
        snow: "#fbf9f9",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        button: "'DM Sans'",
      },
      borderRadius: {
        "8xs": "5px",
        "10xs": "3px",
      },
    },
    fontSize: {
      base: "16px",
      lg: "18px",
      sm: "14px",
      xs: "12px",
      "3xs": "10px",
      inherit: "inherit",
    },
    // screens: {
    //   lg: {
    //     max: "1200px",
    //   },
    //   md: {
    //     max: "960px",
    //   },
    //   sm: {
    //     max: "420px",
    //   },
    //   xl: {
    //     raw: "screen and (max-width: 1300px)",
    //   },
    // },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '752px',
          },
          '@screen lg': {
            maxWidth: '976px',
          },
          '@screen xl': {
            maxWidth: '1280px',
          },
        }
      })
    },
    function ({ addVariant }) {
      addVariant('mobile-only', "@media screen and (max-width: 767px)"); // instead of hard-coded 640px use sm breakpoint value from config. Or anything
    },
    function ({ addVariant }) {
      addVariant('Tab-only', "@media screen and (min-width: 768px) and (max-width: 1023px)"); // instead of hard-coded 
    },
    function ({ addVariant }) {
      addVariant('Lap-only', "@media screen and (min-width: 1024px)"); // instead of hard-coded 
    },
  ]
};
