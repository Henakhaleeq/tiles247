/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dominant: "#fff",
        yellowgreen: "#bde031",
        dimgray: "#737373",
        darkslategray: {
          "100": "#393939",
          "200": "rgba(57, 57, 57, 0.7)",
        },
        crimson: "#d20b17",
        dark: "#0a142f",
        lightgoldenrodyellow: "#e7f0c0",
        snow: "#fbf9f9",
        "light-border": "#e2e4ea",
        gray: "#676f82",
        gray1: "#0f0f0f",
        black: "#000",
        olivedrab: "#78bb4f",
      },
      spacing: {},
      fontFamily: {
        "text-large": "Inter",
        button: "'DM Sans'",
      },
      borderRadius: {
        "10xs": "3px",
        "8xs": "5px",
        "70xl-5": "89.5px",
        "default-border-raius": "4px",
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
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
      mq767: {
        raw: "screen and (max-width: 767px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
