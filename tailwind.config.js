/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-white": "#fff",
        dodgerblue: "rgba(2, 127, 238, 0.75)",
        gray: {
          "100": "#757575",
          "200": "#212121",
          "300": "rgba(255, 255, 255, 0.84)",
          "400": "rgba(0, 0, 0, 0.8)",
        },
        "base-black": "#000",
        aliceblue: "#f3f8ff",
        "light-primary": "#1573fe",
        gainsboro: "#d9d9d9",
        "system-gray-systemgray6": "#f0f0f5",
        "system-gray-systemgray2": "#a4a4a9",
        greenyellow: {
          "100": "#a2f835",
          "200": "#96f835",
        },
        seagreen: {
          "100": "rgba(0, 92, 41, 0.95)",
          "200": "rgba(0, 92, 41, 0.9)",
          "300": "rgba(0, 92, 41, 0.2)",
          "400": "#005c29",
          "500": "rgba(0, 92, 41, 0.92)",
        },
        cornflowerblue: "#419ff2",
        "color-dark-grey-v2": "#535763",
        "color-accent-04": "#b5ebcd",
        "color-dark-grey": "#d1d3d4",
        "neutral-03": "#efefef",
        "secondary-01": "#ffbc99",
        "neutral-07": "#1a1d1f",
        "color-light-body-text": "#1a1b2d",
        "color-accent-07": "#fb9b9b",
        "color-primary-blue": "#6759ff",
        "color-accent-03": "#b1e6fc",
        "light-ex-3": "#ebf0f0",
        "light-ex-2": "#e3f4e1",
        "light-ex-1": "#ece7fe",
        "light-color-4": "#289bf7",
        steelblue: "#276b88",
        dimgray: {
          "100": "#6c6c6c",
          "200": "#606060",
        },
        darkgray: "#9e9e9e",
        tomato: "#f84135",
      },
      spacing: {},
      fontFamily: {
        "body-medium": "Roboto",
        "title-poppins-large": "Poppins",
        "base-1-semibold": "Inter",
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
        inherit: "inherit",
        "inria-sans": "'Inria Sans'",
        "poller-one": "'Poller One'",
        play: "Play",
        pridi: "Pridi",
        outfit: "Outfit",
      },
      borderRadius: {
        "3xs": "10px",
        "3xl": "22px",
        "6xl": "25px",
        "8xs": "5px",
        "13xl": "32px",
        "41xl": "60px",
      },
    },
    fontSize: {
      "3xs": "10px",
      sm: "14px",
      mini: "15px",
      base: "16px",
      "13xl": "32px",
      lg: "18px",
      xs: "12px",
      "3xl": "22px",
      "23xl": "42px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
