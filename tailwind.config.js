module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto"],
      },
      fontSize: {
        mini: "0.5rem",
        xs: ".62rem",
        tiny: ".75rem",
        midi: ".80rem",
      },
      backgroundOpacity: {
        85: "0.85",
      },
      rotate: {
        35: "35deg",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
